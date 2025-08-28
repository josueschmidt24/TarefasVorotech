import express from "express";
import { getNtpTime } from "../services/ntpService.js";
import { DateTime } from "luxon";

const router = express.Router();

router.get("/timenow", async (req, res) => {
  const { tz } = req.query;
  const timezone = tz || "UTC";

  // Valida timezone
  if (!DateTime.now().setZone(timezone).isValid) {
    res.status(400);
    res.setHeader("Content-Type", "application/json");
    return res.send(JSON.stringify(
      { error: "Timezone inválido. Use algo como America/Sao_Paulo." },
      null,
      2
    ));
  }

  try {
    const date = await getNtpTime();

    // Converte para o timezone solicitado usando Luxon
    const dt = DateTime.fromJSDate(date, { zone: timezone });
    const isoString = dt.toISO(); // ISO 8601 com offset correto

    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(
      { timezone, datetime: isoString },
      null,
      2
    ));
  } catch (err) {
    res.status(500);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(
      { error: "Falha ao consultar servidor NTP", details: err.message },
      null,
      2
    ));
  }
});

export default router;