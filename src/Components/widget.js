import React from "react";

function Widget() {
  return (
    <div className="bg-blue-500 p-5">
      <div>
        <h1 className="font-bold text-3xl pb-4">Top Cash-Back Credit Cards</h1>
        <div className="rounded-lg border py-2">
          {/* inside upper div separation */}
          <div className="grid grid-cols-2">
            {/* left div */}
            <div>
              <div className="grid grid-cols-2 pb-2 mr-20 ml-4">
                <h1 className="text-xs pt-1 pl-7 pb-1 rounded-lg bg-blue-200 font-semibold text-blue-800">
                  BEST CASH BACK, BEST NO ANNUAL FEE CARD
                </h1>
              </div>

              <div>
                <h1 className="pl-7 text-3xl font-bold">Chase Freedom Flex℠</h1>
              </div>
            </div>

            {/* right div */}
            <div className="text-center pt-3 ml-20 mr-20">
              <h1 className="text-white text-2xl font-bold bg-green-500 hover:bg-green-600 hover:duration-200 hover:ease-out duration-200 rounded-lg ml-20 mr-20 p-3 cursor-pointer">
                Apply Now
              </h1>

              <div>
                <h1 className="text-xs pt-3">
                  On Chase Bank USA, NA's Website
                </h1>
              </div>
            </div>
          </div>
          {/* inside upper div separation */}
          widget
        </div>
      </div>
    </div>
  );
}

export default Widget;
