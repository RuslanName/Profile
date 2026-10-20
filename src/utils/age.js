export function getAge(today = new Date()) {
    const birthdayHasPassed = today.getMonth() > 1
        || (today.getMonth() === 1 && today.getDate() >= 25);

    return today.getFullYear() - 2005 - (birthdayHasPassed ? 0 : 1);
}
