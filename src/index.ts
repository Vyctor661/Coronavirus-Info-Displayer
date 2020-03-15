// Someone kill me cuz this is the worst way of making a website with ts

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

    interface confirmedData {
        value: number;
    }
    interface recoveredData {
        value: number;
    }
    interface deathsData {
        value: number;
    }
    interface generatedData {
        confirmed: confirmedData;
        recovered: recoveredData;
        deaths: deathsData;
    }
    const generateTable = (
        data: generatedData,
        globalData: generatedData,
        country: string
    ) => {
        return `
        <table>
            <tr>
                <th>Data</th>
                <th>${country}</th>
                <th>Global</th>
            </tr>
            <tr>
                <td>Confirmed Cases</td>
                <td>${data.confirmed.value}</td>
                <td>${globalData.confirmed.value}</td>
            </tr>
            <tr>
                <td>Confirmed Recoveries</td>
                <td>${data.recovered.value}</td>
                <td>${globalData.recovered.value}</td>
            </tr>
            <tr>
                <td>Confirmed Deaths</td>
                <td>${data.deaths.value}</td>
                <td>${globalData.deaths.value}</td>
            </tr>
            <tr>
                <td>Death Percentage</td>
                <td>${(
                    (data.deaths.value / data.confirmed.value) *
                    100
                ).toFixed(2)}%</td>
                <td>${(
                    (globalData.deaths.value / globalData.confirmed.value) *
                    100
                ).toFixed(2)}%</td>
            </tr>
            <tr>
                <td>Recovery Percentage</td>
                <td>${(
                    (data.recovered.value / data.confirmed.value) *
                    100
                ).toFixed(2)}%</td>
                <td>${(
                    (globalData.recovered.value / globalData.confirmed.value) *
                    100
                ).toFixed(2)}%</td>
            </tr>
        </table>`;
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
    const getGlobalData = async () => {
        try {
            const apiData = await fetch(`https://covid19.mathdro.id/api`);
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

            if (data.error) {
                showError(data);
            } else {
                const content: HTMLElement = <HTMLElement>(
                    document.getElementById("content")
                );
                content.innerHTML = generateTable(
                    data,
                    await getGlobalData(),
                    country
                );
            }
        } catch (error) {
            console.log(error);
        }
    };
    showData();

    button.addEventListener("click", () => showData());
};
