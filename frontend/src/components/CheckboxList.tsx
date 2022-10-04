import React, { useContext } from "react";

import Checkbox from "./Checkbox/Checkbox";

import { Context } from "../context";

import slugify from "../utils/slugify";

type TCheckboxList = React.HTMLAttributes<HTMLDivElement>;

interface IProps {
  filterKey: string;
  values: string[];
}

const CheckboxList: React.FC<TCheckboxList & IProps> = ({ filterKey, values }) => {
  const { filters, addFilter, removeFilter } = useContext(Context);

  const handleChange = (e: any) => {
    const isChecked = e.target.checked;
    const value = e.target.value;
    if (isChecked) addFilter(filterKey, value);
    else removeFilter(filterKey, value)
  }

  return (
    <fieldset className="flex flex-col">
      {
        values.map(value => (
          <Checkbox
            key={slugify(value)}
            label={value.toLowerCase()}
            onChange={handleChange}
            checked={filters[filterKey]?.includes(value.toLowerCase())}
          />
        ))
      }
    </fieldset>
  )
};

export default React.memo(CheckboxList);