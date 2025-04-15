# Aidomx server

Versi pengembangan lebih lanjut dari [@wadahkode/server](https://github.com/wadahkode/server)

## Konsep

1. Modular
2. Tidak bergantung pada library
3. Menggunakan node:http bawaan dari nodejs
4. Sebagai bagian sistem server dari [@aidomx/cli](https://github.com/aidomx/cli.git)
5. Bisa digunakan sebagai server PHP atau node

---

Karena @aidomx/server hanya sedikit bagian penting dari [@aidomx/cli](https://github.com/aidomx/cli.git) untuk itu fokusnya hanya menjalankan server.

## Dukungan

```
+-----------------------+
| HTTP_METHOD | Status  |
|-----------------------|
| GET         | Ready   |
| POST        | Ready   |
| PUT         | Waited  |
| PATCH       | Waited  |
| DELETE      | Waited  |
+-----------------------+
```

---

## Sinopsis singkat

Aidomx server bekerja seperti expressjs, perbedaan singkatnya adalah kebebasan dalam pengembangan.

Expressjs tentu punya visi dan misi sendiri, hal yang sama untuk aidomx server.
