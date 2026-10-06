"use server";

export async function submitContact(prevState, formData) {
  const nom = formData.get("nom")?.trim() ?? "";
  const email = formData.get("email")?.trim() ?? "";
  const message = formData.get("message")?.trim() ?? "";

  if (!nom || !email || !message) {
    return { error: "Tous les champs sont requis." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "L'adresse e-mail n'est pas valide." };
  }

  // Point d'intégration : envoyer un e-mail, enregistrer en base de
  // données, etc. Pour l'instant, la soumission est seulement validée.
  console.log("Nouveau message de contact", { nom, email, message });

  return { success: "Merci pour votre message, nous vous répondrons vite." };
}
