const FEES = { WEB: 40000, DIG: 25000 };
const DISCOUNT_RATE = 0.10;   // last digit 2 → 0–4 band → 10%
const DISCOUNT_AGE = 18;

document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();                       // stop page reload

  const name = document.getElementById("fullName").value.trim();
  const age = Number(document.getElementById("age").value);
  const code = document.getElementById("workshop").value.trim().toUpperCase();
  const result = document.getElementById("result");

  function show(message, type) {
    result.textContent = message;
    result.className = type;                // "success" or "error"
  }

  // Validate required values
  if (name === "") {
    return show("Error: please enter the participant's name.", "error");
  }
  if (document.getElementById("age").value === "" || !Number.isFinite(age) || age < 1 || age > 120) {
    return show("Error: please enter a valid age (1–120).", "error");
  }
  // Validate workshop code separately: no zero-fee fallback
  if (!Object.prototype.hasOwnProperty.call(FEES, code)) {
    return show("Error: unrecognised workshop code. Please choose WEB or DIG.", "error");
  }

  // Calculate fee
  const baseFee = FEES[code];
  let fee = baseFee;
  let note = "no discount";
  if (age >= DISCOUNT_AGE) {
    fee = baseFee * (1 - DISCOUNT_RATE);
    note = "10% discount applied";
  }

  show(
    `${name}, your ${code} registration fee is UGX ${fee.toLocaleString("en-UG")} (${note}).`,
    "success"
  );
});