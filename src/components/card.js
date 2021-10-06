import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import '../App.css'


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: '#ffffff',
        margin: 20,

    },

});

const Name = styled.h5`
 color:black;
 font-size: 15px;
 text-align: center;
`
const Img = styled.img`
 border-radius: 50%;
 padding: 0px;
 width: 80%;
 margin: 0px;
`
const Select = styled.select`
background-color: #2d2d2d;
color: white;
padding: .1em 1em;
margin: 5px 10px 30px 5px;
width: 60%;
border: none;
font-size: 14px;
box-shadow: 0 2px 3px 3px rgba(0, 0, 0, 0.2);
outline: none;
`
const Table = styled.div
    `
 width: 100%;
 padding-inline: 25%;
`
const Column = styled.div
    `
 display: table-cell;
 text-align: center;
`
const Row = styled.div
    `
 display: table;
 padding:  0.5em 0.5em;
 width: 100%;
 table-layout: fixed;
 border-spacing: 2px;
`
export default function SimpleCard() {
    const classes = useStyles();

    function CardContent(props) {
        return (
            <div>
                <Img src={props.src} />
                <p>{props.nama}</p>
                <p>{props.nim}</p>

            </div>
        );
    }
    //class components

    return (
        <div className="wrapper">
            <Table>
                <Row>
                    <Column>
                        <Card className={classes.root}>
                            <Name>
                                <div className="praktikan">
                                    <CardContent nama="Dzakwan Diego Pienthara" nim="21120118130104" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png" />
                                    <Select>
                                        <option value="1">Kelas</option>
                                        <option value="2">A</option>
                                        <option value="3">B</option>
                                    </Select>
                                </div>
                            </Name>
                        </Card>
                    </Column>
                    <Column>
                        <Card className={classes.root}>
                            <Name>
                                <div className="praktikan">
                                    <CardContent nama="Kanzu Khoiron Adli" nim="21120118130063" src="https://pbs.twimg.com/profile_images/1076656867584094208/7MrmXcrp_400x400.jpg" />
                                    <Select>
                                        <option value="1">Kelas</option>
                                        <option value="2">A</option>
                                        <option value="3">B</option>
                                    </Select>
                                </div>

                            </Name>
                        </Card>
                    </Column>
                </Row>
            </Table>
        </div>
    )
}