# 🔐 Security & Privacy
### Безопасность и конфиденциальность · Seguridad y privacidad

<div align="center">

**Privacy is a foundation, not an add-on.**  
**Приватность — основа, а не дополнение.**  
**La privacidad es la base, no un añadido.**

</div>

## 🧪 Current status · Текущий статус · Estado actual

**EN** — You Daily is an early-stage concept. This repository is private. Never place real credentials, API tokens, private messages, mailbox exports or personal documents in commits, issues or examples.

**RU** — You Daily находится на раннем этапе. Репозиторий приватный. Не добавляй реальные пароли, API-токены, личные сообщения, выгрузки почты и документы в коммиты, задачи или примеры.

**ES** — You Daily está en una fase inicial. Este repositorio es privado. No incluyas credenciales reales, tokens API, mensajes privados, exportaciones de correo ni documentos personales en commits, incidencias o ejemplos.

## 🧱 Security principles · Принципы безопасности · Principios de seguridad

### 1. 🔑 Least privilege · Минимальные разрешения · Privilegios mínimos
Request only permissions required for a clearly explained feature. / Запрашивать только необходимые разрешения. / Solicitar solo los permisos necesarios.

### 2. 🔒 Secure credentials · Защита данных доступа · Protección de credenciales
Use official authorization and secure secret storage. Never hard-code tokens, passwords or private keys. / Использовать официальную авторизацию и безопасное хранилище секретов. Не записывать токены и пароли в код. / Usar autorización oficial y almacenamiento seguro. Nunca incluir tokens o contraseñas en el código.

### 3. 🧹 Data minimization · Минимизация данных · Minimización de datos
Collect only what is needed, define retention periods and provide deletion controls. / Собирать только необходимое, устанавливать сроки хранения и давать возможность удаления. / Recopilar solo lo necesario, definir plazos y permitir la eliminación.

### 4. 🚪 User control · Контроль пользователя · Control del usuario
Explain each connected source and allow users to disconnect it and revoke access. / Объяснять назначение источников и позволять отключать их и отзывать доступ. / Explicar cada fuente y permitir desconectarla y revocar el acceso.

### 5. 🧾 Traceable AI · Проверяемый ИИ · IA verificable
Keep source references and distinguish original content from AI summaries or suggestions. / Сохранять первоисточники и отделять их от сводок и рекомендаций ИИ. / Conservar las fuentes y distinguirlas de los resúmenes y sugerencias de IA.

### 6. 🧱 Untrusted input · Недоверенный контент · Contenido no confiable
Imported messages, documents and web content may contain malicious instructions. Never treat them as trusted system instructions. / Импортированные сообщения и документы могут содержать вредоносные инструкции. Не считай их доверенными системными командами. / Los mensajes y documentos importados pueden contener instrucciones maliciosas. No los trates como instrucciones de sistema confiables.

## 🚫 Never commit · Не добавлять в Git · Nunca subir a Git
- Passwords and recovery codes / Пароли и коды восстановления / Contraseñas y códigos de recuperación
- API keys, OAuth tokens and session cookies / API-ключи, OAuth-токены и cookies / Claves API, tokens OAuth y cookies
- Private messages and mailbox exports / Личные сообщения и выгрузки почты / Mensajes privados y exportaciones de correo
- Personal documents and identifiable datasets / Личные документы и идентифицирующие данные / Documentos personales y datos identificables
- Production database dumps / Дампы рабочих баз / Volcados de bases de producción

## 🛠️ If a secret is exposed · Если секрет раскрыт · Si se expone un secreto
1. Revoke or rotate it immediately. / Немедленно отозвать или заменить. / Revocarlo o sustituirlo inmediatamente.
2. Check access logs and affected services. / Проверить журналы доступа и сервисы. / Revisar registros y servicios afectados.
3. Remove it from repository history where appropriate. / При необходимости удалить из истории репозитория. / Eliminarlo del historial cuando corresponda.
4. Remember: deleting a file does not invalidate an exposed credential. / Удаление файла не делает раскрытый секрет недействительным. / Borrar el archivo no invalida una credencial expuesta.

## 🐛 Reporting a vulnerability · Сообщение об уязвимости · Informar de una vulnerabilidad

**EN** — Do not publish exploit details, credentials or personal data in a public issue. Contact the repository owner privately through GitHub. Include the affected component, potential impact and safe reproduction steps.

**RU** — Не публикуй детали эксплуатации уязвимости, учётные данные или личную информацию в открытых задачах. Свяжись с владельцем приватно через GitHub. Укажи компонент, возможный ущерб и безопасные шаги воспроизведения.

**ES** — No publiques detalles de explotación, credenciales ni datos personales en una incidencia pública. Contacta en privado con el propietario a través de GitHub. Incluye el componente afectado, el posible impacto y pasos seguros para reproducirlo.

A formal vulnerability response process must be established before a public production launch. / До публичного запуска нужен официальный процесс обработки сообщений об уязвимостях. / Antes del lanzamiento público debe existir un proceso formal de respuesta a vulnerabilidades.

---

*🔐 Protect the user's information as carefully as the product itself. / Защищать данные пользователя так же тщательно, как сам продукт. / Proteger los datos del usuario con el mismo cuidado que el producto.*
