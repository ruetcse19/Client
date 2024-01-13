import { useEffect, useState } from "react";

const SearchQuestion = () => {
    const [questions, setQuestions] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("https://colorful-vest-foal.cyclic.app/api/v1/question/questions")
            .then((response) => response.json())
            .then((data) => {
                setQuestions(data.questions);
            });
    }, []);
    console.log(questions);
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredBooks = questions.filter((book) =>
        book.course.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div>
            <div className="margin-top-70"></div>
            <div id="titlebar" className="gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Browse Questions</h2>
                            <nav id="breadcrumbs" className="dark">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="resources-questions-all.html">Question</a></li>
                                    <li>Find Questions</li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4">
                        <div className="sidebar-container">


                            <div className="sidebar-widget">
                                <h3>Title</h3>
                                <div className="input-with-icon">
                                    <div id="autocomplete-container">
                                    <input
                                            id="autocomplete-input"
                                            type="text"
                                            placeholder="Title"
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                        />
                                    </div>
                                    <i className="icon-feather-users"></i>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 content-left-offset">

                        <h3 className="page-title">Search Results</h3>


                        <div className="listings-container margin-top-35">

                            {filteredBooks.map((book) => (
                                <div className="resource-listing" key={book._id}>


                                <div className="resource-listing-details">

                                    <div className="resource-listing-company-logo">
                                        <img src="images/question.png" alt="" />
                                    </div>


                                    <div className="resource-listing-description">
                                        <h3 className="resource-listing-title">CSE 1101: Computer Programming</h3>
                                    </div>


                                    <span className="bookmark-icon"></span>
                                </div>


                                <div className="resource-listing-footer">
                                    <ul>
                                        <li><i className="icon-material-outline-bookmark-border"></i> CSE 1101</li>
                                        <li><i className="icon-material-outline-local-offer"></i> CSE</li>
                                        <li><i className="icon-feather-calendar"></i> 17 Series</li>
                                        <li><i className="icon-line-awesome-pencil"></i> Student Name</li>
                                    </ul>

                                    <div className="question-buttons">
                                        <a href="documents/sample_question.pdf" download="sample_question.pdf" className="download-button">Download Now <i className="icon-feather-download"></i></a>
                                        <a href="resources-question-details.html" className="download-button" >More Details <i className="icon-feather-link"></i></a>
                                    </div>
                                </div>
                            </div>
                            ))}
                            <div className="clearfix"></div>
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="pagination-container margin-top-30 margin-bottom-60">
                                        <nav className="pagination">
                                            <ul>
                                                <li className="pagination-arrow"><a href="#"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
                                                <li><a href="#">1</a></li>
                                                <li><a href="#" className="current-page">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li className="pagination-arrow"><a href="#"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchQuestion;