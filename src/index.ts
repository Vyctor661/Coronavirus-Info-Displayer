type ErrorMessage = {
  message: string;
};

type ErrorData = {
  error?: ErrorMessage;
};

const button = document.getElementById("button") as HTMLButtonElement;

const showError = (data: ErrorData) => {
  const content = document.getElementById("content");

  content.innerText = data.error.message;
};

interface ConfirmedData {
  value: number;
}

interface RecoveredData {
  value: number;
}

interface DeathsData {
  value: number;
}

interface GeneratedData {
  confirmed: ConfirmedData;
  recovered: RecoveredData;
  deaths: DeathsData;
}

// This is here so we get syntax highlighting from the lit-html extension
const html = (
  s: TemplateStringsArray,
  ...data: Array<string | number>
): string => {
  return s.reduce((acc, curr, index) => `${acc}${data[index - 1]}${curr}`, "");
};

const calculatePercentage = (
  data: GeneratedData,
  key: "deaths" | "recovered",
) => {
  return (data[key].value / data.confirmed.value * 100).toFixed(2);
};

const generateTable = (
  data: GeneratedData,
  globalData: GeneratedData,
  country: string,
) => {
  const deathPercentage = {
    local: calculatePercentage(data, "deaths"),
    global: calculatePercentage(globalData, "deaths"),
  };

  const recoveryPercentage = {
    local: calculatePercentage(data, "recovered"),
    global: calculatePercentage(globalData, "recovered"),
  };

  return html`
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
                <td>${deathPercentage.local}%</td>
                <td>${deathPercentage.global}%</td>
            </tr>
            <tr>
                <td>Recovery Percentage</td>
                <td>${recoveryPercentage.local}%</td>
                <td>${recoveryPercentage.global}%</td>
            </tr>
        </table>`;
};

const getData = async (country: string) => {
  const apiData = await fetch(
    `https://covid19.mathdro.id/api/countries/${country}`,
  );

  return apiData.json();
};

const getGlobalData = async () => {
  const apiData = await fetch(`https://covid19.mathdro.id/api`);
  return apiData.json();
};

const showData = async () => {
  try {
    const { value: country } = (
      document.getElementById("input")
    ) as HTMLInputElement;

    const data = await getData(country);

    if (data.error) {
      return showError(data);
    }

    const content = (
      document.getElementById("content")
    );

    content.innerHTML = generateTable(
      data,
      await getGlobalData(),
      country,
    );
  } catch (error) {
    console.log(error.message || error);
  }
};

showData();

button.addEventListener("click", showData);
