---
title: "Platform Manajemen Inventori untuk Jaringan Retail"
description: "Sistem terpusat yang menghubungkan 47 outlet retail dengan manajemen stok real-time, laporan otomatis, dan integrasi kasir."
date: 2025-08-01
category: "Web"
is_public: true
client_name: "RetailPlus (nama disamarkan)"
thumbnail: ""
problem: "Klien mengelola 47 outlet dengan sistem stok yang tersebar — sebagian pakai spreadsheet, sebagian pakai software kasir yang berbeda-beda. Rekap stok harian membutuhkan 3-4 jam kerja manual setiap hari."
solution: "Platform terpusat berbasis web dengan sinkronisasi stok real-time antar outlet, dashboard analytics, dan API yang terhubung ke berbagai sistem kasir yang sudah ada."
result: "Waktu rekap stok turun dari 3 jam menjadi 8 menit. ROI terasa dalam 3 bulan pertama. Sistem kini melayani 200+ pengguna aktif tanpa downtime berarti."
tech_stack: ["Go", "PocketBase", "React", "Tailwind CSS", "Cloudflare", "Caddy"]
---

## Latar Belakang

Klien adalah jaringan retail yang bergerak di segmen kebutuhan rumah tangga. Dengan 47 outlet yang tersebar di 3 kota, mereka menghadapi tantangan klasik bisnis yang tumbuh cepat tanpa infrastruktur digital yang memadai.

## Tantangan Teknis

Setiap outlet menggunakan sistem kasir yang berbeda — ada yang pakai software lokal lama, ada yang pakai tablet dengan aplikasi cloud, ada yang masih manual. Menyatukan data dari semua sumber ini adalah tantangan utama.

Kami membangun layer abstraksi yang memungkinkan setiap jenis sumber data terhubung ke platform pusat tanpa harus mengganti sistem yang sudah ada di outlet.

## Arsitektur

Backend dibangun di atas PocketBase yang di-extend dengan Go untuk business logic kustom — validasi stok, kalkulasi HPP, dan trigger notifikasi otomatis. Frontend menggunakan React dengan update real-time via SSE.

Seluruh sistem berjalan di satu VPS dengan biaya operasional di bawah Rp 300 ribu per bulan.
