const reminders = [
  "“Indeed, Allah is with those who fear Him.” (Qur'an 16:128)",
  "“Remember Me and I will remember you.” (Qur'an 2:152)",
  "“Prayer is better than sleep.” (Hadith)",
  "“The best among you are those who learn the Qur’an and teach it.” (Bukhari)"
];

function getReminder() {
  const random = Math.floor(Math.random() * reminders.length);
  document.getElementById("reminder").innerText = reminders[random];
}
