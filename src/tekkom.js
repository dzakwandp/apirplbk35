import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";


export default class tekkom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tekkom: [],
        visible: false,
        nama: "",
        publish: "",
        tahun: "",
        search: ""
        };
    }

    state = {
        komponen :true
    }


    handleButton = (nama) => {
        alert(nama);
    };

    handleDelete = (id) => {
        // alert(id)
        var proceed = window.confirm("Serius mau hapus?");
        if (proceed) {
            axios({
                method: "delete",
                url: "http://apirplbk35.herokuapp.com/data/del/"+id,
                headers: {
                accept: "*/*"
                }
                })
                .then((data) => {
                alert("berhasil dihapus");
                window.location.reload();
                })
                .catch(() => {
                alert("gagal bos :(");
                });
        } else{
            window.location.reload();
        }
    }

    handleTambahOrang = () => {
        this.setState({
        visible: true,
        });
    };

    handleNama = (e) => {
        this.setState({
        nama: e.target.value,
        });
        console.log(this.state.nama);
    };

    handlePublish = (e) => {
        this.setState({
        publish: e.target.value,
        });
        console.log(this.state.publish);
    };

    handleTahun = (e) => {
        this.setState({
        tahun: e.target.value,
        });
        console.log(this.state.tahun);
    };

    handleSubmit = () => {
        if (
        this.state.nama !== "" &&
        this.state.publish !== "" &&
        !this.state.tahun !== ""
        ) {
            axios({
                method: "post",
                url: "http://apirplbk35.herokuapp.com/data/post",
                headers: {
                accept: "*/*",
                },
                data: {
                nama: this.state.nama,
                publish: this.state.publish,
                tahun: this.state.tahun,
                },
            })
            .then((data) => {
            alert("berhasil menambahkan");
            window.location.reload();
            })
            .catch((error) => {
            alert("gagal lur");
            });
        } else {
            alert("pastikan semua kolom terisi");
        }
    };

    componentDidMount() {
        axios({
            method: "get",
            url: "http://apirplbk35.herokuapp.com/data",
            headers: {
            accept: "*/*",
            },
        })
        .then((data) => {
            // data.json();
            this.setState({
                tekkom: data.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };

    render() {
        return (
        <div>
        <div className="boxWhite">
        
        <center>
        <button onClick={this.handleTambahOrang}>Tambah Game</button>
        <br></br><br/>
        {/* <input label="search" placeholder="search mobile..." onKeyUp={this.coba}></input> */}
        </center>
        <Modal
        title="Tambah Game Impianmu!!"
        centered
        visible={this.state.visible}
        onOk={this.handleSubmit}
        onCancel={() => this.setState({ visible: false })}
        width={500}
        >
        <div style={{ textAlign: "center" }}>
            <p>Nama : </p>{" "}
            <input
            type="text"
            placeholder="nama"
            onChange={this.handleNama}
            />
            <br />
            <p>Publisher : </p>{" "}
            <input type="text" placeholder="publish" onChange={this.handlePublish} />
            <br />
            <p>tahun : </p>{" "}
            <input
            type="text"
            placeholder="tahun"
            onChange={this.handleTahun}
            />
            <br />
        </div>
        </Modal>
        <div style={{display:'flex',flexDirection:'row', width:'100%'}}>
        {this.state.tekkom.map((results, index) => {
        return (
        <div className="card" key={results.nama} >
        <div className="card-body">
        <h5 className="card-title">Nama : {results.nama}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Publisher : {results.publish}</h6>
        <h6 className="card-subtutle mb-2 text-muted">Tahun : {results.tahun}</h6>
        </div>
        <button
        className="button"
        onClick={() => this.handleButton(results.nama)}
        >
        klik aku
        </button>
        <button className="button" onClick={() => this.handleDelete(results._id)}>
        Hapus data   
        </button>
        </div>
        );
        })}
        </div>
        </div>
        </div>
        );
    }
}
