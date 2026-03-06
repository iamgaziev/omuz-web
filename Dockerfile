# Используем Node 20
FROM node:20-alpine AS builder

# Указываем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем все зависимости, включая dev-зависимости
RUN npm install --include=dev

# Копируем остальные файлы проекта
COPY . .

# Собираем проект
RUN npm run build

# Указываем порт, который будет слушать vite preview
EXPOSE 3000

# Запускаем приложение через vite preview
#CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
CMD ["npm", "run", "start"]