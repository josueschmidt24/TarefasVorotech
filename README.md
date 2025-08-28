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
- Retorna data/hora no formato ISO 8601.
- Validação de timezone.
- Consulta NTP realizada apenas quando o endpoint é chamado.
- Tratamento de erros detalhado.

---

## Tecnologias
- Frontend: ReactJS, JavaScript, CSS
- Backend: Node.js, Express, Luxon, ntp-client
- Ferramentas: Create React App

---

## Como rodar o projeto

### API e Calculadora i3
```bash
npm install
npm start     # para rodar normalmente
```
