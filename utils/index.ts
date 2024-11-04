export const formatCurrency = (amount: number) => {
  // Check if the number is valid
  if (isNaN(amount)) {
    amount = 0;
  }

  // Create Intl.NumberFormat object for Indonesian Rupiah
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Format the number into IDR currency
  return formatter.format(amount);
};

export function getMonthName(monthNumber: number, type?: "Normal" | "Short") {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthNamesN = [
    "January",
    "Februari",
    "Maret",
    "April",
    "May",
    "Juni",
    "Juli",
    "Aguastus",
    "September",
    "October",
    "November",
    "Desember",
  ];

  // Mengembalikan nama bulan berdasarkan indeks (angka bulan - 1)
  return !type
    ? monthNames[monthNumber - 1]
    : type === "Normal"
    ? monthNamesN[monthNumber - 1]
    : monthNames[monthNumber - 1] || "Invalid month";
}

export const substring = (text: string, maxLength: number) => {
  // Potong teks sesuai panjang yang ditentukan, tambahkan "..." jika melebihi batas
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }

  return text;
};
