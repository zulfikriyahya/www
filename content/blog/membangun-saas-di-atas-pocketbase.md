---
title: "Membangun SaaS MVP di Atas PocketBase dalam 2 Minggu"
description: "PocketBase bukan sekadar backend alternatif — ia adalah senjata rahasia untuk tim kecil yang ingin bergerak cepat tanpa mengorbankan kualitas arsitektur."
date: 2025-11-10
category: "Engineering"
tags: ["PocketBase", "Go", "SaaS", "Backend"]
featured: true
---

Ketika klien datang dengan permintaan MVP dalam dua minggu dan budget terbatas, pilihan stack teknologi bisa menjadi penentu keberhasilan atau kegagalan proyek.

Kami sudah mencoba berbagai kombinasi — Supabase, Firebase, custom REST API dengan Go — tapi untuk skala tertentu, PocketBase memberikan sweet spot yang sulit ditandingi.

## Apa itu PocketBase

PocketBase adalah backend-as-a-service yang berjalan sebagai single binary. Ia menyediakan database SQLite embedded, realtime subscriptions, file storage, autentikasi, dan admin UI — semuanya dalam satu executable berukuran sekitar 30MB.

Untuk tim yang terbiasa mengelola Supabase instance atau Firebase project, ini terdengar terlalu sederhana. Tapi kesederhanaan itulah yang membuat PocketBase sangat powerful untuk use case tertentu.

## Arsitektur yang Kami Gunakan

Untuk proyek SaaS klien kami — platform manajemen inventori untuk jaringan retail kecil-menengah — kami memilih stack berikut:

- **PocketBase** sebagai backend utama (API, auth, database, file storage)
- **Next.js** untuk frontend aplikasi
- **Hugo** untuk landing page dan dokumentasi
- **Cloudflare** untuk CDN dan DNS
- **Caddy** sebagai reverse proxy

Seluruh infrastruktur berjalan di satu VPS dengan 2 vCPU dan 4GB RAM. Biaya operasional bulanan di bawah Rp 200 ribu.

## Yang Membuat PocketBase Berbeda

### Extend dengan Go

PocketBase bisa di-extend menggunakan Go. Artinya kita bisa menambahkan custom business logic, middleware, atau integrasi pihak ketiga langsung di level backend — bukan di layer tambahan yang terpisah.

```go
app.OnRecordBeforeCreateRequest("orders").Add(func(e *core.RecordCreateEvent) error {
    stock := e.Record.GetInt("quantity")
    if stock <= 0 {
        return apis.NewBadRequestError("Stok tidak tersedia", nil)
    }
    return nil
})
```

### Realtime Out of the Box

Setiap collection di PocketBase otomatis memiliki realtime subscription via SSE. Tidak perlu setup WebSocket server terpisah, tidak perlu Redis pub/sub — cukup subscribe dari frontend.

```js
pb.collection("orders").subscribe("*", function (e) {
  console.log(e.action, e.record);
});
```

### Migrasi Database Terotomasi

PocketBase menyimpan schema changes sebagai migration files yang bisa di-commit ke Git. Ini memastikan konsistensi antara environment development, staging, dan production.

## Hasilnya

MVP selesai dalam 11 hari kerja. Klien langsung bisa onboarding pengguna pertama mereka di hari ke-12. Tiga bulan setelah launch, platform ini melayani 47 outlet dengan lebih dari 200 pengguna aktif — masih di VPS yang sama, tanpa satu pun downtime yang tidak terencana.

## Kapan Tidak Menggunakan PocketBase

PocketBase bukan untuk semua use case. Hindari jika:

- Data Anda melebihi kemampuan SQLite (multi-terabyte, write-heavy concurrent)
- Tim Anda membutuhkan database relasional yang kompleks dengan banyak joins
- Regulasi mengharuskan database enterprise tertentu

Untuk kebanyakan MVP dan aplikasi bisnis skala menengah, PocketBase adalah pilihan yang underrated dan underutilized.
