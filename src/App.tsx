import React, { useState } from 'react';
import './App.css';
import { data } from "./db";
import { Space, Table } from "antd";
import Link from "antd/es/typography/Link";
import { Footer } from "antd/es/layout/layout";
import Search from "antd/es/input/Search";
import githubLogo from "./github-mark.svg";


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Link',
        dataIndex: 'link',
        key: 'link',
        render: (link: string) => <Link href={ link } target="_blank" rel="noopener noreferrer">View</Link>,
    }
];

function App() {

    const [ filteredData, setFilteredData ] = useState(data)

    const onSearch = (text: string) => {
        const lowerText = text.toLowerCase()
        setFilteredData(data.filter((item) => item.name.toLowerCase().includes(lowerText)))
    }

    return (
        <div className="App">

            <div style={ {
                background: '#192a56',
                paddingLeft: 16,
                paddingRight: 16,
                display: 'flex',
                alignItems: 'center',
                color: "white",
                flexWrap: "wrap",
                justifyContent: 'space-between'
            } }>
                <h2>Android Proguard Directory</h2>
                <Link href={ "https://github.com/yogeshpaliyal/ProGuard-Directory" } target="_blank"
                      rel="noopener noreferrer">
                    <img src={ githubLogo } height={ 32 } width={ 32 }
                                                     className="Github Logo" alt="logo"/>
                </Link>
            </div>
            <Space style={ { flex: 1, margin: 16 } } direction={ "vertical" } size={ 16 }>
                <Search
                    placeholder="Search"
                    size="large"
                    enterButton={ "Search" }
                    onSearch={ onSearch }
                    onChange={ (e) => onSearch(e.target.value) }
                />


                <Table dataSource={ filteredData } columns={ columns }/>
            </Space>
            <Footer> Created by <Link href={ "https://github.com/yogeshpaliyal" } target="_blank"
                                      rel="noopener noreferrer">Yogesh Paliyal</Link></Footer>

        </div>
    );
}

export default App;
