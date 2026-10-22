"use server";

// Validation de la soumission : nom, prénom, e-mail et message sont
// requis ; société, téléphone et pays sont optionnels. Point
// d'intégration : l'envoi réel (e-mail, base de données) se branchera
// ici — pour l'instant la soumission est validée et journalisée.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(prevState, formData) {
  const get = (cle) => formData.get(cle)?.trim() ?? "";

  const nom = get("nom");
  const prenom = get("prenom");
  const email = get("email");
  const message = get("message");

  if (!nom || !prenom || !email || !message) {
    return {
      error:
        "Merci de renseigner votre nom, votre prénom, votre e-mail et votre message.",
    };
  }

  if (!EMAIL.test(email)) {
    return { error: "L'adresse e-mail n'est pas valide." };
  }

  console.log("Nouveau message de contact", {
    nom,
    prenom,
    societe: get("societe"),
    telephone: get("telephone"),
    pays: get("pays"),
    email,
    message,
  });

  return { success: "Merci pour votre message, nous vous répondrons vite." };
}
