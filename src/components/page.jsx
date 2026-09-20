
function Page({
    currentPage,
    setCurrentPage,
    endIndex,
    moviesLength,
}) {
    // page buttons
    return (
        <div className="text-center mt-4">
            <button
                className="btn btn-secondary me-2"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>

            <span className="text-white">
                Page {currentPage}
            </span>

            <button
                className="btn btn-warning ms-2"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={endIndex >= moviesLength}
            >
                Next
            </button>
        </div>
    );
}

export default Page;
