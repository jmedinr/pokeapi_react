import React, { useState, useEffect } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Dropdown } from "primereact/dropdown";
import { PokemonService } from "../../services/PokemonService";
import "./List.css"

const List = () => {
  const [dataviewValue, setDataviewValue] = useState(null);
  const layout = "grid";
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [sortField, setSortField] = useState(null);
  const pokemonService = new PokemonService();

  const sortOptions = [
    { label: "A to Z", value: "name" },
    { label: "Z to A", value: "!name" },
  ];

  useEffect(() => {
    pokemonService.getAllPokemon().then((data) => {
        setDataviewValue(JSON.parse(data))
    });
  }, []);

  const onSortChange = (event) => {
    const value = event.value;

    if (value.indexOf("!") === 0) {
      setSortOrder(-1);
      setSortField(value.substring(1, value.length));
      setSortKey(value);
    } else {
      setSortOrder(1);
      setSortField(value);
      setSortKey(value);
    }
  };

  const dataviewHeader = (
    <div className="grid grid-nogutter">
      <div className="col-6" style={{ textAlign: "left" }}>
        <Dropdown
          value={sortKey}
          options={sortOptions}
          optionLabel="label"
          placeholder="Sort By Name"
          onChange={onSortChange}
        />
      </div>
    </div>
  );


  const dataviewListItem = (data) => {
    console.log(data)
    return (
      <div className="col-12">
      <img
        src={data.imagen}
        alt={data.name}
        className="my-4 md:my-0 w-9 md:w-10rem shadow-2 mr-5"
      />
        <div className="flex flex-column md:flex-row align-items-center p-3 w-full">
          <div className="flex-1 text-center md:text-left">
            <label>Nombre: </label>
            <div className="font-bold text-2xl">{data.name}</div>
            <br></br>
            <span class="font-abilities">{data.habilidad[0].ability.name}</span>
          </div>
        </div>
      </div>
    );
  };


  const itemTemplate = (data, layout) => {
    if (layout === "grid") {
      return  dataviewListItem(data);
    } 
  };

  return (
    <div className="grid list-demo">
      <div className="col-12">
        <div className="card m-3">
          <h5>List Of Pokemons</h5>
          <DataView
            value={dataviewValue}
            layout={layout}
            paginator
            rows={10}
            sortOrder={sortOrder}
            sortField={sortField}
            itemTemplate={itemTemplate}
            header={dataviewHeader}
          ></DataView>
        </div>
      </div>
    </div>
  );
};

export {List};
