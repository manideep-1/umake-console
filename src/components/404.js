import React from "react";

function PageNotFound() {
  return (
    <div className="app">
      <div id="wrapper my-5 py-5">
        <div id="content-wrapper" class="bg-white d-flex flex-column my-5 py-5">
          <div id="content m-5 p-5">
            <div class="container-fluid my-5 py-5">
              <div class="text-center my-5">
                <h1 class="mx-auto" data-text="404">
                  404
                </h1>
                <p class="lead text-gray-800 mb-5">Page Not Found</p>
                <p class="text-gray-500 mb-0">
                  It looks like you found a glitch in the matrix...
                </p>
                <a href="/">&larr; Back to Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
