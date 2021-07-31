import React, { useMemo, useEffect, useState } from "react";
import axios from "axios";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { BsFileArrowDown, BsFileArrowUp, BsArrowUpDown } from "react-icons/bs";
import { BsFillEyeFill, BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import { COLUMNS } from "./Columns";
import "./table.css";
import { AddFaq } from "./AddFaq";

Modal.setAppElement("#root");

export default function Faqs() {
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPost, setModalPost] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isActive, setIsActive] = useState("");

  const handleSubmit = (faqId) => {
    const formData = new FormData();
    formData.append("question", question);
    formData.append("answer", answer);
    formData.append("isActive", isActive);
 
    axios
      .put(`https://movieapp-server.herokuapp.com/faqs/${faqId}`, formData)
      .then((res) => {
        window.location.reload();
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editFaq = async (faqId) => {
    await axios
      .get(`https://movieapp-server.herokuapp.com/faqs/${faqId}`)
      .then((res) => {
        setModalPost(res.data);
        setQuestion(res.data.question);
        setAnswer(res.data.answer);
        setIsActive(res.data.isActive);
      })
      .catch((err) => {
        console.log(err);
      });
    setModalIsOpen(true);
  };

  const deleteFaq = (faqId) => {
    axios
      .delete(`https://movieapp-server.herokuapp.com/faqs/${faqId}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("https://movieapp-server.herokuapp.com/faqs")
      .then((res) => {
        setData(res.data.response);
        console.log(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const faqs = useMemo(() => data, []);

  useTable({
    columns: columns,
    data: faqs,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            top: 35,
            backgroundColor: "rgba(211, 211, 211, 0.60)",
            marginTop: "30px",
          },
          content: {
            padding: 4,
            height: 500,
            marginTop: "10px",
            backgroundColor: "#181818",
            border: "none",
            width: "90%",
            margin: "auto",
            paddingTop: "2%",
            paddingBottom: "2%",
            textAlign: "center",
          },
        }}
      >
        <div className="faq-form-container">
          <form
            className="faq-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(modalPost._id);
            }}
          >
            <div className="faq-form-item">
              <label htmlFor="question">Question</label>
              <textarea
                name="question"
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              />
            </div>
            <div className="faq-form-item">
              <label htmlFor="answer">Answer</label>
              <textarea
                name="answer"
                className="faq-answer"
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
              />
            </div>
            
            <div>
              <select
                className="faq-select"
                value={isActive}
                onChange={(e) => {
                  setIsActive(e.target.value);
                }}
              >
                <option value="true">Active</option>
                <option value="false">Block</option>
              </select>
            </div>

            <button type="submit" className="submit-btn faq-submit-btn"> Submit</button>
          </form>
        </div>
      </Modal>

      <div className="faqlist-container">
        <h1 className="faqlist-title">FAQ Lists</h1>

        <hr className="hr-faq" />
        <div className="search-show-bar-container">
          <div className="faq-show-bar">
            Show&nbsp;{" "}
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 20, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            &nbsp; entries
          </div>

          <div className="faq-search-bar">
            Search:&nbsp;&nbsp;
            <input
              value={globalFilter || ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
          </div>
        </div>

        {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/> */}
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {/* <th></th> */}
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <div className="faqs-icon-container">
                      <div>{column.render("Header")}</div>
                      <div className="faqs-sort-icon">
                        <BsArrowUpDown />
                      </div>
                    </div>
                  </th>
                ))}
                <th>ACTION</th>
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                  <td className="row-icon-container">
                    {/* <Link to={`/faqdetails/${row.original._id}`}>
                      <BsFillEyeFill className="view-faq-icon eyefill-icon" />
                      &nbsp;
                    </Link> */}
                    <BsPencilSquare
                      className="edit-faq-icon"
                      onClick={() => {
                        editFaq(row.original._id);
                      }}
                    />
                    &nbsp;
                    <BsFillTrashFill
                      className="delete-faq-icon"
                      onClick={() => {
                        deleteFaq(row.original._id);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="faq-button-container">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>
          <button
            className="faq-page-nav"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <div className="faq-current-page">{pageIndex + 1}</div>
          <button
            className="faq-page-nav"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
}
