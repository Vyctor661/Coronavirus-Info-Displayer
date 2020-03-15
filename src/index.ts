window.onload = () => {
    const button: HTMLButtonElement = <HTMLButtonElement>(
        document.getElementById("button")
    );

    type errorMessage = {
        message: string;
    };
    type errorData = {
        error?: errorMessage;
    };

    const showError = (data: errorData) => {
        const content: HTMLElement = <HTMLElement>(
            document.getElementById("content")
        );
        content.innerText = data.error.message;
    };

    const getData = async (country: string) => {
        try {
            const apiData = await fetch(
                `https://covid19.mathdro.id/api/countries/${country}`
            );
            const apiJsonData = await apiData.json();
            return apiJsonData;
        } catch (error) {
            console.log(error.message);
        }
    };
    const showData = async () => {
        try {
            const country: string = (<HTMLInputElement>(
                document.getElementById("input")
            )).value;
            const data = await getData(country);
            console.log(data);
            if (data.error) {
                showError(data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    showData();

    button.addEventListener("click", () => showData());
};
