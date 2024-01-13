import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

const ManageBook = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://colorful-vest-foal.cyclic.app/api/v1/books/books')
            .then((response) => response.json())
            .then((data) => {
                setBooks(data.books)

            });
    }, [])
    const handleDeleteBook = async (bookId) => {
        try {
            const response = await fetch(`https://colorful-vest-foal.cyclic.app/api/v1/books/delete/${bookId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Book successfully deleted, update the state to remove the deleted book
                setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            } else {
                console.error('Failed to delete book');
            }
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };
    console.log(books);
    return (
        <div>
            <div className="dashboard-content-container" data-simplebar>
                <div className="dashboard-content-inner">

                    <div className="dashboard-headline">
                        <h3>Manage Books</h3>

                        <nav id="breadcrumbs" className="dark">
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="dashboard.html">Dashboard</a>
                                </li>
                                <li>Books</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="row">

                        <div className="col-xl-12">
                            <div className="dashboard-box margin-top-0">

                                <div className="headline">
                                    <h3>
                                        <i className="icon-line-awesome-book"></i> Manage Books
                                    </h3>
                                </div>
                                <div className="content">
                                    <ul className="dashboard-box-list">
                                        {books.length > 0 ? (
                                            books.map((book) => (
                                                <li key={book._id}>
                                                    <div className="resource-listing">
                                                        <div className="resource-listing-details">
                                                            <div className="resource-listing-company-logo">
                                                                <img src="https://i.ibb.co/smZ6hCH/image.png" alt='' />
                                                            </div>
                                                            <div className="resource-listing-description">
                                                                <h3 className="resource-listing-title">{book.title}</h3>
                                                                <p className="resource-listing-text">{book.description}</p>
                                                            </div>
                                                        </div>
                                                        <div className="resource-listing-footer">
                                                            <ul>
                                                                <li>
                                                                    <i className="icon-feather-users"></i> {book.authors}
                                                                </li>
                                                                <li>
                                                                    <i className="icon-material-outline-local-offer"></i> {book.category}
                                                                </li>
                                                                <li>
                                                                    <i className="icon-line-awesome-pencil"></i> {book.edition}
                                                                </li>
                                                            </ul>
                                                            <a href={book.pdfLink} download={book.pdfName} className="download-button">
                                                                Download Now <i className="icon-feather-download"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="buttons-to-right">
                                                        <a href="#" className="button blue ripple-effect ico" title="Edit"
                                                            data-tippy-placement="left">
                                                            <i className="icon-feather-edit"></i>
                                                        </a>
                                                      
                                                            <button
                                                                onClick={() => handleDeleteBook(book._id)}
                                                                className="button red ripple-effect ico"
                                                                title="Remove"
                                                                data-tippy-placement="left"
                                                            >
                                                                <i className="icon-feather-trash-2"></i>
                                                            </button>
                                                       
                                                    </div>
                                                </li>
                                            ))
                                        ) : (
                                            <p>No books available</p>
                                        )}
                                    </ul>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageBook;