export const formatCurrency = (amount)=>{
    return new Intl.NumberFormat(navigator.language,{style:"currency",currency:"USD"}).format(amount)
}