export function getRandomQuote(quotes: string[]) : string{
    if(quotes.length === 0) return "";

    const lastIndexStr = sessionStorage.getItem('lastQuoteIndex');
    const lastIndex = lastIndexStr ? parseInt(lastIndexStr) : -1;

    let newIndex: number;
    do{
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === lastIndex && quotes.length > 1);

    sessionStorage.setItem('lastQuoteIndex', newIndex.toString());
    
    return quotes[newIndex];
}
