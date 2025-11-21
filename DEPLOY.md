# Deploy en AWS EC2 (cv.adiestradorescaninos.online)

Guía para levantar el portafolio (Vite/React) en una instancia EC2 usando Nginx.

## 1. Preparar la instancia
1. Crear una instancia (p. ej. Ubuntu 22.04 t3.micro) y asociar un par de llaves.
2. Security Group con entradas: `22/tcp`, `80/tcp`, `443/tcp`. Salientes abiertos.
3. Apuntar el DNS `cv.adiestradorescaninos.online` al **A record** de la IP pública (ej. `3.12.173.165`).

## 2. Acceder por SSH
```bash
ssh -i /ruta/a/tu-par.pem ubuntu@<IP_publica>
```

## 3. Instalar dependencias base
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx git curl snapd

# Node LTS con nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
```

## 4. Desplegar la app
```bash
cd ~
git clone <repo_url> portfolio_website
cd portfolio_website
npm install
npm run build    # genera build/ (config en vite.config.ts)
```

## 5. Publicar con Nginx
```bash
sudo mkdir -p /var/www/portfolio
sudo cp -r build/* /var/www/portfolio/
sudo chown -R www-data:www-data /var/www/portfolio

sudo tee /etc/nginx/sites-available/portfolio <<'EOF'
server {
    listen 80;
    server_name cv.adiestradorescaninos.online;

    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}
EOF

sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

## 6. HTTPS con Let’s Encrypt (opcional recomendado)
```bash
sudo snap install core && sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx -d cv.adiestradorescaninos.online
```
Certbot añade la redirección HTTPS y configura renovaciones automáticas.

## 7. Actualizar despliegues
```bash
cd ~/portfolio_website
git pull
npm install
npm run build
sudo rm -rf /var/www/portfolio/*
sudo cp -r build/* /var/www/portfolio/
sudo chown -R www-data:www-data /var/www/portfolio
sudo systemctl reload nginx
```

## 8. Diagnóstico rápido
- Logs Nginx: `sudo tail -f /var/log/nginx/error.log`
- Servicio: `systemctl status nginx`
- Certbot: `sudo certbot renew --dry-run`
