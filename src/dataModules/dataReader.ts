const fs = require("fs").promises;

export const getFirstNames = async () => {
  try {
    const data = await fs.readFile("data/first_names.json", "utf8");
    const jsonData = JSON.parse(data);

    if (jsonData && jsonData.first_names) {
      return jsonData.first_names;
    } else {
      throw new Error("O arquivo JSON não contém a chave 'first_names'.");
    }
  } catch (error) {
    console.error("Ocorreu um erro ao ler o arquivo JSON:", error);
    return null; // Ou retorne um valor padrão apropriado, se preferir
  }
};

export const getLastNames = async () => {
  try {
    const data = await fs.readFile("data/last_names.json", "utf8");
    const jsonData = JSON.parse(data);

    if (jsonData && jsonData.last_names) {
      return jsonData.last_names;
    } else {
      throw new Error("O arquivo JSON não contém a chave 'first_names'.");
    }
  } catch (error) {
    console.error("Ocorreu um erro ao ler o arquivo JSON:", error);
    return null; // Ou retorne um valor padrão apropriado, se preferir
  }
};

export const getEndNames = async () => {
  try {
    const data = await fs.readFile("data/end_names.json", "utf8");
    const jsonData = JSON.parse(data);

    if (jsonData && jsonData.end_names) {
      return jsonData.end_names;
    } else {
      throw new Error("O arquivo JSON não contém a chave 'first_names'.");
    }
  } catch (error) {
    console.error("Ocorreu um erro ao ler o arquivo JSON:", error);
    return null; // Ou retorne um valor padrão apropriado, se preferir
  }
};
