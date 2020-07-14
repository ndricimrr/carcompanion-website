/*
 * This view will show PostCar Select options
 */

// Imports
import React from "react";
import PostCarInput from "../components/PostCarSelect";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "center",
    width: 1150,
    bottom: 15,
    right: 65,
    columnCount: 2
  },
  buttons: {
    flex: 1,
    justifyContent: "center",
    alignContent: "space-between",
  },
  button: {
    padding: 8,
    margin: 10,
  },
}));

const specs = [
  {
    label: "Make",
    values: [
      {
        key: "alfa",
        val: "Alfa Romeo",
      },
      {
        key: "audi",
        val: "Audi",
      },
      {
        key: "bmw",
        val: "BMW",
      },
      {
        key: "chevrolet",
        val: "Chevrolet",
      },
      {
        key: "citroen",
        val: "Citroën",
      },
      {
        key: "fiat",
        val: "Fiat",
      },
      {
        key: "ford",
        val: "Ford",
      },
      {
        key: "mercedes",
        val: "Mercedes Benz",
      },
      {
        key: "porsche",
        val: "Porsche",
      },
      {
        key: "opel",
        val: "Opel",
      },
      {
        key: "vw",
        val: "VolksWagen",
      },
    ],
  },
  {
    label: "Model",
    values: [
      {
        key: "4C",
        val: "4C",
      },
      {
        key: "8C",
        val: "8C",
      },
      {
        key: "alfa145",
        val: "Alfa 145",
      },
      {
        key: "alfa146",
        val: "Alfa 146",
      },
      {
        key: "alfasud",
        val: "Alfasud",
      },
      {
        key: "A1",
        val: "A1",
      },
      {
        key: "A2",
        val: "A2",
      },
      {
        key: "100",
        val: "100",
      },
      {
        key: "200",
        val: "200",
      },
      {
        key: "R8",
        val: "R8",
      },
      {
        key: "116",
        val: "116",
      },
      {
        key: "118",
        val: "118",
      },
      {
        key: "214",
        val: "214 Active Tourer",
      },
      {
        key: "216",
        val: "216 Active Tourer",
      },
      {
        key: "2er",
        val: "2er Gran Coupe",
      },
      {
        key: "2500",
        val: "2500",
      },
      {
        key: "alero",
        val: "Alero",
      },
      {
        key: "astro",
        val: "Astro",
      },
      {
        key: "camaro",
        val: "Camaro",
      },
      {
        key: "captiva",
        val: "Captiva",
      },
      {
        key: "2CV",
        val: "2CV",
      },
      {
        key: "BX",
        val: "BX",
      },
      {
        key: "C1",
        val: "C1",
      },
      {
        key: "C3",
        val: "C3 Picasso",
      },
      {
        key: "DS",
        val: "DS",
      },
      {
        key: "500",
        val: "500L Cross",
      },
      {
        key: "bravo",
        val: "Bravo",
      },
      {
        key: "coupe",
        val: "Coupe",
      },
      {
        key: "panda",
        val: "Panda",
      },
      {
        key: "punto",
        val: "Punto",
      },
      {
        key: "fiesta",
        val: "Fiesta",
      },
      {
        key: "focus",
        val: "Focus",
      },
      {
        key: "galaxy",
        val: "Galaxy",
      },
      {
        key: "GT",
        val: "GT",
      },
      {
        key: "sierra",
        val: "Sierra",
      },
      {
        key: "A180",
        val: "A180",
      },
      {
        key: "A200",
        val: "A200",
      },
      {
        key: "B180",
        val: "B180",
      },
      {
        key: "B200",
        val: "B200",
      },
      {
        key: "C180",
        val: "C180",
      },
      {
        key: "astra",
        val: "Astra",
      },
      {
        key: "calibra",
        val: "Calibra",
      },
      {
        key: "corsa",
        val: "Corsa",
      },
      {
        key: "frontera",
        val: "Frontera",
      },
      {
        key: "insignia",
        val: "Insignia",
      },
      {
        key: "356",
        val: "356",
      },
      {
        key: "912",
        val: "912",
      },
      {
        key: "carrera",
        val: "Carrera GT",
      },
      {
        key: "cayenne",
        val: "Cayenne",
      },
      {
        key: "panamera",
        val: "Panamera",
      },
      {
        key: "181",
        val: "181",
      },
      {
        key: "beetle",
        val: "Beetle",
      },
      {
        key: "golf",
        val: "Golf",
      },
      {
        key: "polo",
        val: "Polo",
      },
      {
        key: "scirocco",
        val: "Scirocco",
      },
    ],
  },
  {
    label: "Year",
    values: [
      {
        key: "2020",
        val: "2020",
      },
      {
        key: "2019",
        val: "2019",
      },
      {
        key: "2018",
        val: "2018",
      },
      {
        key: "2017",
        val: "2017",
      },
      {
        key: "2016",
        val: "2016",
      },
      {
        key: "2015",
        val: "2015",
      },
      {
        key: "2014",
        val: "2014",
      },
      {
        key: "2013",
        val: "2013",
      },
      {
        key: "2012",
        val: "2012",
      },
      {
        key: "2011",
        val: "2011",
      },
      {
        key: "2010",
        val: "2010",
      },
      {
        key: "2009",
        val: "2009",
      },
      {
        key: "2008",
        val: "2008",
      },
      {
        key: "2007",
        val: "2007",
      },
      {
        key: "2006",
        val: "2006",
      },
      {
        key: "2005",
        val: "2005",
      },
      {
        key: "2004",
        val: "2004",
      },
      {
        key: "2003",
        val: "2003",
      },
      {
        key: "2002",
        val: "2002",
      },
      {
        key: "2001",
        val: "2001",
      },
      {
        key: "2000",
        val: "2000",
      },
      {
        key: "1999",
        val: "1999",
      },
      {
        key: "1998",
        val: "1998",
      },
      {
        key: "1997",
        val: "1997",
      },
      {
        key: "1996",
        val: "1996",
      },
      {
        key: "1995",
        val: "1995",
      },
      {
        key: "1994",
        val: "1994",
      },
      {
        key: "1993",
        val: "1993",
      },
      {
        key: "1992",
        val: "1992",
      },
      {
        key: "1991",
        val: "1991",
      },
      {
        key: "1990",
        val: "1990",
      },
      {
        key: "1980",
        val: "1980",
      },
      {
        key: "1970",
        val: "1970",
      },
      {
        key: "1960",
        val: "1960",
      },
    ],
  },
  {
    label: "Mileage",
    values: [
      {
        key: "5000-10000",
        val: "5.000 - 10.000 km",
      },
      {
        key: "10000-20000",
        val: "10.000 - 20.000 km",
      },
      {
        key: "20000-30000",
        val: "20.000 - 30.000 km",
      },
      {
        key: "30000-40000",
        val: "30.000 - 40.000 km",
      },
      {
        key: "40000-50000",
        val: "40.000 - 50.000 km",
      },
      {
        key: "50000-60000",
        val: "50.000 - 60.000 km",
      },
      {
        key: "60000-80000",
        val: "60.000 - 80.000 km",
      },
      {
        key: "80000-100000",
        val: "80.000 - 100.000 km",
      },
      {
        key: "100000-200000",
        val: "100.000 - 200.000 km",
      },
      {
        key: "200000-",
        val: "More than 200.000 km",
      },
    ],
  },
  {
    label: "Price",
    values: [
      {
        key: "0-500",
        val: "0 - 500 €",
      },
      {
        key: "500-1000",
        val: "500 - 1.000 €",
      },
      {
        key: "1000-2000",
        val: "1.000 - 2.000 €",
      },
      {
        key: "2000-5000",
        val: "2.000 - 5.000 €",
      },
      {
        key: "5000-10000",
        val: "5.000 - 10.000 €",
      },
      {
        key: "10000-20000",
        val: "10.000 - 20.000 €",
      },
      {
        key: "20000-50000",
        val: "20.000 - 50.000 €",
      },
      {
        key: "50000-100000",
        val: "50.000 - 100.000 €",
      },
      {
        key: "100000-",
        val: "More than 100.000 €",
      },
    ],
  },
];

const PostCarSelectView = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <center>
        {specs.map((spec, index) => (
          <PostCarInput label={spec.label} key={index} values={spec.values} />
        ))}
      </center>
    </div>
  );
};

export default PostCarSelectView;
