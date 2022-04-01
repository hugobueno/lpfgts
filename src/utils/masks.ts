export const convertToBRL = (value: number) => {
    return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
}

export const maskCPF = (value: string) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
};

export const maskPhone = (value: string) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
};

export const maskCEP = (value: string) => {
    return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
};

export const clearMask = (value: string) => {
    return value
        .replace(/\D/g, "")
}

export const maskAgence = (value: string) => {
    return value
    .replace(/\D/g, "")
    .replace(/^(\d{4})/, "$1");
}

export const maskDate = (value:string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  };
  
