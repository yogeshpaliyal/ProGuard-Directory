import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from "./db";
import { Layout, Space, Table } from "antd";
import Link from "antd/es/typography/Link";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Search from "antd/es/input/Search";


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

    const [filteredData, setFilteredData] = useState(data)

    const onSearch = (text: string) => {
        const lowerText = text.toLowerCase()
        setFilteredData(data.filter((item) => item.name.toLowerCase().includes(lowerText)))
    }

    return (
        <div className="App">
            <Header style={ { display: 'flex', alignItems: 'center', color: "white" } }>
                <h1>Proguard Directory</h1>
            </Header>

            <Space direction={ "vertical" } style={ { margin: 16, flex: 1 } }>
                <Search
                    placeholder="Search"
                    size="large"
                    enterButton={"Search"}
                    onSearch={ onSearch }
                    onChange={ (e) => onSearch(e.target.value) }
                />
                <Table style={{flex: 1}} dataSource={ filteredData } columns={ columns }/>
            </Space>

            <Footer> Create by Yogesh Paliyal </Footer>

        </div>
    );
}

export default App;
