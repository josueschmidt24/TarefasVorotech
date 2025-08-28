import ntpClient from "ntp-client";

/**
 * Consulta a hora atual de um servidor NTP.
 * Retorna uma Promise com o objeto Date em UTC.
 */
export function getNtpTime() {
  return new Promise((resolve, reject) => {
    ntpClient.getNetworkTime("pool.ntp.org", 123, (err, date) => {
      if (err) reject(err);
      else resolve(date);
    });
  });
}