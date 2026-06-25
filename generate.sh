#!/bin/bash

OUTPUT="draft.md"
> "$OUTPUT"
echo "# SOURCE CODE" >> "$OUTPUT"

EXCLUDE_DIRS=(
  ".git"
  ".vscode"
  ".cache"
  "__pycache__"
  ".pytest_cache"
  "*.egg-info"
  "node_modules"
  "venv"
  ".venv"
  "env"
  "dist"
  "build"
  ".pid"
  "logs"
  "public"
  "resources"
  "themes"
)

EXCLUDE_FILES=(
  "generate.sh"
  "draft.md"
  ".env"
  ".gitignore"
  "README.md"
  "LICENSE"
  "CONCEPT.md"
  "pnpm-lock.yaml"
  ".hugo_build.lock"
)

BINARY_EXTS=(
  jpg jpeg png gif webp ico bmp tiff
  mp3 mp4 wav ogg webm
  pdf zip tar gz rar 7z
  woff woff2 ttf eot otf
  xlsx xls doc docx ppt pptx
  exe bin so dll dylib
  db sqlite sqlite3
  lock map pyc pyo
)

declare -A LANG_MAP=(
  [py]="python"
  [js]="js"
  [jsx]="jsx"
  [ts]="ts"
  [tsx]="tsx"
  [json]="json"
  [yaml]="yaml"
  [yml]="yaml"
  [toml]="toml"
  [md]="md"
  [html]="html"
  [css]="css"
  [sh]="bash"
  [bash]="bash"
  [env]="bash"
  [txt]="text"
  [xml]="xml"
  [sql]="sql"
  [cfg]="ini"
  [ini]="ini"
  [csv]="text"
)

PRUNE_ARGS=()
for d in "${EXCLUDE_DIRS[@]}"; do
  PRUNE_ARGS+=(-path "./$d" -prune -o)
done

is_binary_ext() {
  local ext="${1,,}"
  for bext in "${BINARY_EXTS[@]}"; do
    [[ "$ext" == "$bext" ]] && return 0
  done
  return 1
}

write_section() {
  local filepath="$1"
  local ext="${filepath##*.}"
  local lang="${LANG_MAP[$ext]:-text}"
  echo "" >> "$OUTPUT"
  echo "## $filepath" >> "$OUTPUT"
  echo '```'"$lang" >> "$OUTPUT"
  cat "$filepath" >> "$OUTPUT"
  echo "" >> "$OUTPUT"
  echo '```' >> "$OUTPUT"
  echo "---" >> "$OUTPUT"
}

COUNT=0

while IFS= read -r -d '' file; do
  rel="${file#./}"
  basename_rel=$(basename "$rel")

  [[ "$rel" == *"__pycache__"* ]] && continue
  [[ "$rel" == *".egg-info"* ]] && continue
  [[ "$rel" == *".pytest_cache"* ]] && continue

  skip=0
  for excl in "${EXCLUDE_FILES[@]}"; do
    [[ "$basename_rel" == "$excl" ]] && skip=1 && break
  done
  [[ $skip -eq 1 ]] && continue

  ext="${rel##*.}"
  ext_lower="${ext,,}"

  is_binary_ext "$ext_lower" && continue

  if ! file --mime-type "$file" 2>/dev/null | grep -qE "text/|application/json|application/javascript|application/xml|inode/x-empty"; then
    continue
  fi

  write_section "$rel"
  (( COUNT++ ))

done < <(find . "${PRUNE_ARGS[@]}" -type f -print0 | sort -z)

echo ""
echo "draft.md selesai — $COUNT file tercatat."
