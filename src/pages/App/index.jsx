import {
  ButtonComponent,
  ButtonComponentReset,
  ColumnFirst,
  ComponentDetails,
  Container,
  ContainerSelectColumns,
  ContainerTwo,
  InputComponent,
  Loading,
  Table,
  Td,
  TdRed,
  Th,
} from "./styles.js";
import { useEffect, useState } from "react";
import {
  Sliders,
  CheckCircle,
  Eye,
  EyeClosed,
  WarningCircle,
  CheckSquare,
} from "phosphor-react";

export function App() {
  const [name, setName] = useState("");
  const [changeName, setChangeName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [one, setOne] = useState([2]);
  const [two, setTwo] = useState([4]);
  const [three, setThree] = useState([6]);
  const [four, setFour] = useState([8]);
  const [five, setFive] = useState([10]);
  const [six, setSix] = useState([12]);
  const [seven, setSeven] = useState([14]);
  const [eight, setEight] = useState([16]);
  const [nine, setNine] = useState([18]);
  const [ten, setTen] = useState([20]);
  const [number, setNumber] = useState(0);
  const [houses, setHouses] = useState(98);
  const [changeHouses, setChangeHouses] = useState(0);
  const [columnOne, setColumnOne] = useState(true);
  const [columnTwo, setColumnTwo] = useState(true);
  const [columnThree, setColumnThree] = useState(true);
  const [columnFour, setColumnFour] = useState(true);
  const [columnFive, setColumnFive] = useState(true);
  const [columnSix, setColumnSix] = useState(true);
  const [columnSeven, setColumnSeven] = useState(true);
  const [columnEight, setColumnEight] = useState(true);
  const [columnNine, setColumnNine] = useState(true);
  const [columnTen, setColumnTen] = useState(true);

  function handleReset() {
    setIsLoading(true);
    setColumnOne(true);
    setColumnTwo(true);
    setColumnThree(true);
    setColumnFour(true);
    setColumnFive(true);
    setColumnSix(true);
    setColumnSeven(true);
    setColumnEight(true);
    setColumnNine(true);
    setColumnTen(true);
    setHouses(98);
    setIsLoading(false);
  }

  function handleUpdateHouses() {
    if (changeHouses > 100 || changeHouses < 5) {
      alert("Insira um número igual ou menor que 100 e maior ou igual a 5!");
      return;
    }
    setHouses(changeHouses - 2);
  }

  function handleSelectColumn(column) {
    if (column === 1) {
      if (columnOne === true) {
        setColumnOne(false);
      } else {
        setColumnOne(true);
      }
    } else if (column === 2) {
      if (columnTwo === true) {
        setColumnTwo(false);
      } else {
        setColumnTwo(true);
      }
    } else if (column === 3) {
      if (columnThree === true) {
        setColumnThree(false);
      } else {
        setColumnThree(true);
      }
    } else if (column === 4) {
      if (columnFour === true) {
        setColumnFour(false);
      } else {
        setColumnFour(true);
      }
    } else if (column === 5) {
      if (columnFive === true) {
        setColumnFive(false);
      } else {
        setColumnFive(true);
      }
    } else if (column === 6) {
      if (columnSix === true) {
        setColumnSix(false);
      } else {
        setColumnSix(true);
      }
    } else if (column === 7) {
      if (columnSeven === true) {
        setColumnSeven(false);
      } else {
        setColumnSeven(true);
      }
    } else if (column === 8) {
      if (columnEight === true) {
        setColumnEight(false);
      } else {
        setColumnEight(true);
      }
    } else if (column === 9) {
      if (columnNine === true) {
        setColumnNine(false);
      } else {
        setColumnNine(true);
      }
    } else if (column === 10) {
      if (columnTen === true) {
        setColumnTen(false);
      } else {
        setColumnTen(true);
      }
    }
  }

  function handleUpdateName() {
    if (changeName.length === 0) {
      alert("Digite seu nome!");
      return;
    }
    setName(changeName);
  }

  useEffect(() => {
    function handleCountOne() {
      let items = [2];
      for (let i = 0; houses > i; i++) {
        items.push(Number(items[i]) + 1);
      }
      setOne(items);
    }
    function handleCountTwo() {
      for (let i = 0; 98 > i; i++) {
        setTwo((prevState) => [...prevState, prevState[i] + 2]);
      }
    }
    function handleCountThree() {
      for (let i = 0; 98 > i; i++) {
        setThree((prevState) => [...prevState, prevState[i] + 3]);
      }
    }
    function handleCountFour() {
      for (let i = 0; 98 > i; i++) {
        setFour((prevState) => [...prevState, prevState[i] + 4]);
      }
    }
    function handleCountFive() {
      for (let i = 0; 98 > i; i++) {
        setFive((prevState) => [...prevState, prevState[i] + 5]);
      }
    }
    function handleCountSix() {
      for (let i = 0; 98 > i; i++) {
        setSix((prevState) => [...prevState, prevState[i] + 6]);
      }
    }
    function handleCountSeven() {
      for (let i = 0; 98 > i; i++) {
        setSeven((prevState) => [...prevState, prevState[i] + 7]);
      }
    }
    function handleCountEight() {
      for (let i = 0; 98 > i; i++) {
        setEight((prevState) => [...prevState, prevState[i] + 8]);
      }
    }
    function handleCountNine() {
      for (let i = 0; 98 > i; i++) {
        setNine((prevState) => [...prevState, prevState[i] + 9]);
      }
    }
    function handleCountTen() {
      for (let i = 0; 98 > i; i++) {
        setTen((prevState) => [...prevState, prevState[i] + 10]);
      }
    }
    setIsLoading(true);
    handleCountOne();
    handleCountTwo();
    handleCountThree();
    handleCountFour();
    handleCountFive();
    handleCountSix();
    handleCountSeven();
    handleCountEight();
    handleCountNine();
    handleCountTen();
    setIsLoading(false);
  }, [houses]);

  return (
    <>
      {isLoading ? (
        <Loading>
          <h1>Carregando...</h1>
        </Loading>
      ) : (
        <>
          {name.length === 0 ? (
            <div
              style={{
                padding: 50,
                display: "flex",
                flexDirection: "column",
                gap: 30,
                alignItems: "center",
                justifyContent: "center",
                height: "80vh",
              }}
            >
              <InputComponent
                placeholder="Digite seu nome!"
                onChange={(e) => setChangeName(e.target.value)}
              />
              <ButtonComponent onClick={handleUpdateName}>
                Let's Go <CheckSquare size="40px" />
              </ButtonComponent>
            </div>
          ) : (
            <Container>
              <ColumnFirst>
                <h1>
                  Seja bem vindo, <i>{name}!</i>
                </h1>
                <p style={{ textAlign: "justify" }}>
                  Abaixo você pode <strong>configurar sua tabuada</strong>, você
                  pode <strong>restringir</strong> qual número da tabuada você
                  quer visualizar (de 1 à 10) e a quantidade de casas (de 5 à
                  100).
                </p>
                <h1 style={{ fontSize: 16 }}>
                  Selecione qual tabuada você quer ver:
                </h1>
                <ContainerSelectColumns>
                  <button
                    onClick={() => handleSelectColumn(1)}
                    style={{
                      background: "none",
                      border: "none",
                      marginTop: -15,
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: columnOne ? "bold" : "normal",
                      }}
                    >
                      1
                    </p>
                    {columnOne ? <Eye /> : <EyeClosed />}
                  </button>
                  <button
                    onClick={() => handleSelectColumn(2)}
                    style={{
                      background: "none",
                      border: "none",
                      marginTop: -15,
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: columnTwo ? "bold" : "normal",
                      }}
                    >
                      2
                    </p>
                    {columnTwo ? <Eye /> : <EyeClosed />}
                  </button>
                  <button
                    onClick={() => handleSelectColumn(3)}
                    style={{
                      background: "none",
                      border: "none",
                      marginTop: -15,
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: columnThree ? "bold" : "normal",
                      }}
                    >
                      3
                    </p>
                    {columnThree ? <Eye /> : <EyeClosed />}
                  </button>
                  <button
                    onClick={() => handleSelectColumn(4)}
                    style={{
                      background: "none",
                      border: "none",
                      marginTop: -15,
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: columnFour ? "bold" : "normal",
                      }}
                    >
                      4
                    </p>
                    {columnFour ? <Eye /> : <EyeClosed />}
                  </button>
                  <button
                    onClick={() => handleSelectColumn(5)}
                    style={{
                      background: "none",
                      border: "none",
                      marginTop: -15,
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: columnFive ? "bold" : "normal",
                      }}
                    >
                      5
                    </p>
                    {columnFive ? <Eye /> : <EyeClosed />}
                  </button>
                  <button
                    onClick={() => handleSelectColumn(6)}
                    style={{
                      background: "none",
                      border: "none",
                      marginTop: -15,
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: columnSix ? "bold" : "normal",
                      }}
                    >
                      6
                    </p>
                    {columnSix ? <Eye /> : <EyeClosed />}
                  </button>
                  <button
                    onClick={() => handleSelectColumn(7)}
                    style={{
                      background: "none",
                      border: "none",
                      marginTop: -15,
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: columnSeven ? "bold" : "normal",
                      }}
                    >
                      7
                    </p>
                    {columnSeven ? <Eye /> : <EyeClosed />}
                  </button>
                  <button
                    onClick={() => handleSelectColumn(8)}
                    style={{
                      background: "none",
                      border: "none",
                      marginTop: -15,
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: columnEight ? "bold" : "normal",
                      }}
                    >
                      8
                    </p>
                    {columnEight ? <Eye /> : <EyeClosed />}
                  </button>
                  <button
                    onClick={() => handleSelectColumn(9)}
                    style={{
                      background: "none",
                      border: "none",
                      marginTop: -15,
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: columnNine ? "bold" : "normal",
                      }}
                    >
                      9
                    </p>
                    {columnNine ? <Eye /> : <EyeClosed />}
                  </button>
                  <button
                    onClick={() => handleSelectColumn(10)}
                    style={{
                      background: "none",
                      border: "none",
                      marginTop: -15,
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: columnTen ? "bold" : "normal",
                      }}
                    >
                      10
                    </p>
                    {columnTen ? <Eye /> : <EyeClosed />}
                  </button>
                </ContainerSelectColumns>
                <ContainerTwo>
                  <InputComponent
                    placeholder="Informe quantas casas você quer visualizar (5 à 100)"
                    onChange={(e) => setChangeHouses(Number(e.target.value))}
                    type="number"
                  />
                  <ButtonComponent onClick={handleUpdateHouses}>
                    Aplicar <CheckCircle size="20px" />
                  </ButtonComponent>
                </ContainerTwo>
                <ComponentDetails>
                  <ContainerTwo>
                    <h1 style={{ color: "#ffffff", fontSize: 20 }}>
                      Número de casas exibidas:{" "}
                    </h1>
                    <p style={{ color: "#ffffff" }}>{houses + 2}</p>
                  </ContainerTwo>
                </ComponentDetails>
                <ButtonComponentReset onClick={handleReset}>
                  Resetar configurações <Sliders size="30px" />
                </ButtonComponentReset>
              </ColumnFirst>
              {columnOne ||
              columnTwo ||
              columnThree ||
              columnFour ||
              columnFive ||
              columnSix ||
              columnSeven ||
              columnEight ||
              columnNine ||
              columnTen ? (
                <Table>
                  <thead>
                    <tr>
                      {columnOne ? <Th>1</Th> : null}
                      {columnTwo ? <Th>2</Th> : null}
                      {columnThree ? <Th>3</Th> : null}
                      {columnFour ? <Th>4</Th> : null}
                      {columnFive ? <Th>5</Th> : null}
                      {columnSix ? <Th>6</Th> : null}
                      {columnSeven ? <Th>7</Th> : null}
                      {columnEight ? <Th>8</Th> : null}
                      {columnNine ? <Th>9</Th> : null}
                      {columnTen ? <Th>10</Th> : null}
                    </tr>
                  </thead>
                  <tbody>
                    {one.map((item, index) => (
                      <tr key={String(index)}>
                        {columnOne ? <TdRed>{item}</TdRed> : null}
                        {columnTwo ? <Td>{two[index]}</Td> : null}
                        {columnThree ? <Td>{three[index]}</Td> : null}
                        {columnFour ? <Td>{four[index]}</Td> : null}
                        {columnFive ? <Td>{five[index]}</Td> : null}
                        {columnSix ? <Td>{six[index]}</Td> : null}
                        {columnSeven ? <Td>{seven[index]}</Td> : null}
                        {columnEight ? <Td>{eight[index]}</Td> : null}
                        {columnNine ? <Td>{nine[index]}</Td> : null}
                        {columnTen ? <Td>{ten[index]}</Td> : null}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <Loading>
                  <h1 style={{ textAlign: "center" }}>
                    Selecione alguma tabuada para ser exibida!
                  </h1>
                  <WarningCircle size="100px" />
                </Loading>
              )}
            </Container>
          )}
        </>
      )}
    </>
  );
}
