## Install

### MongoDB
MongoDB veritabanı docker üzerinden kullanılmaktadır. Çalıştırmak için aşağıdaki komutu girmeniz gerekmektedir. Projenin `server/src/resources/docker-compose.yaml` dosyası ile aşağıdaki gibi MongoDB' yi kurabilirsiniz. 

```bash
    docker-compose -f docker-compose.yaml up -d
```

### Server-Side

```bash
    cd server
    npm install
```

### Client-Side

```bash
    cd client
    npm install
```

## Usage

```bash
    cd server
    npm run dev
    cd ../client
    npm start
```

## Info
Anasayfada `Name` kısmına tıklanıldığında o sayfaya ait bilgilerin bulunduğu sayfa açılmaktadır. Bu sayfada `Price` değeri RealTime olarak güncellenmektedir.

Anasayfada `Edit Button` tıklanıldığında gerekli ürün ile ilgili bilgiler değişmektedir. Değişiklikler RealTime olarak bu sayfada görünmektedir.

Anasayfadaki `Add Product` butonuna basıldığında yerin bir ürün eklenmektedir. Ürün eklendikten sonra aynı sayfada kalmaktadır.