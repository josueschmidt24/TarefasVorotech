# Calculadora de Nota I3 e API Timenow

## Autor
Josué Santos Schmidt

---

## Descrição
Este projeto contém duas partes integradas:

1. **Frontend (ReactJS)** – Web app que calcula automaticamente a nota I3 dos alunos com base na quantidade de conceitos A, B, C, D e FF.
2. **API (Node.js + Express)** – API que retorna a data e hora atual no padrão ISO 8601, usando Network Time Protocol (NTP).

---

## Funcionalidades

### Frontend
- Inputs para quantidade de conceitos A, B, C, D e FF.
- Cálculo automático da nota I3 (média harmônica ponderada).
- Exibição do total de conceitos lançados.
- Componente que exibe a hora atual consultando a API a cada 10 segundos.

### API
- Endpoint: `/timenow?tz=America/Sao_Paulo`
- Retorna data/hora no formato ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ).
- Validação de timezone.
- Consulta um servidor NTP apenas quando o endpoint é chamado.

---

## Tecnologias
- Frontend: ReactJS, JavaScript, CSS
- Backend: Node.js, Express, Luxon, ntp-client
- Ferramentas: Create React App

---

## Pré-requisitos
- Node.js instalado
- npm
- Navegador (Chrome, Edge, Firefox ou outro)

---

## Como rodar o projeto

### API (Back-end)
1. Abrir o terminal na pasta da API(api-timenow)
2. Instalar dependências:
```bash
npm install
```
3. Executar a API:
```bash
npm start       # ou npm run dev se quiser hot reload
```
4. A API ficará disponível em:
```link
http://localhost:3333/timenow?tz=America/Sao_Paulo
```

### Calculadora de nota i3 (Front-end)
1. Abrir outro terminal na pasta da Calculadora de nota i3(nota-i3-app)
2. Instalar dependências:
```bash
npm install
```

3. Executar a Calculadora de nota i3:
```bash
npm start       # ou npm run dev se quiser hot reload
```
4. A API ficará disponível em:
```link
http://localhost:3000
```

## ⚠️ Importante
- A API precisa estar sendo executada antes do front-end, para que o componente de hora (TimeDisplay) consiga buscar os dados.

