import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../../constants';

export const List = () => {
    const history = useHistory();
    const [state, setState] = useState([])
    const [columns, setColumns] = useState({
        columns: [
            { title: 'Name', field: "name" },
            { title: 'Email', field: "emails" },
            { title: 'Telefone', field: "phones" },
        ]
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
            history.push("/");
        };

        axios
            .get(`${baseUrl}/all-my-contacts`,
                {
                    headers: { "Content-Type": "application/json", 'token': `${token}` },
                })
            .then((response) => {
                setState(response.data.listContacts)
            })
            .catch((error) => {
                console.log("Error: ", error.data);
            });
    }, [history]);

    return (
        <MaterialTable
            title="Contatos"
            columns={columns.columns}
            data={state}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
};