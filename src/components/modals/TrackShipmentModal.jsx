import { X } from "lucide-react";
import { useTrackShipmentStore } from "../../stores";

const TrackShipmentModal = () => {
  const { open, shipment, onClose } = useTrackShipmentStore();

  if (!open && !shipment) return null;
  return (
    <div className="fixed inset-0 bg-black/30 z-[1000] flex items-center justify-center p-4">
      <div className="relative bg-white max-w-4xl w-full max-h-[500px]  overflow-y-auto no-scrollbar rounded-2xl">
        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 rounded-md bg-primary text-white flex items-center justify-center absolute top-4 left-4"
        >
          <X size={18} />
        </button>
        <div className="mt-16 px-4 w-full">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold">Shipment Status</h1>
              <div className="bg-green-600 text-white px-2 py-2 rounded-full text-xs font-medium">
                Recived
              </div>
            </div>

            <div className="my-4 space-y-2 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium opacity-70">Dispatch Date:</span>
                <span className="font-medium">
                  {shipment?.docketInfo[0]
                    ? shipment?.docketInfo[0]["Booking Date"]
                    : ""}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium opacity-70">Source Point:</span>
                <span className="font-medium">
                  {shipment?.docketInfo[0]
                    ? shipment?.docketInfo[0]["C/nor City"]
                    : ""}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium opacity-70">
                  Destination Point:
                </span>
                <span className="font-medium">
                  {shipment?.docketInfo[0]
                    ? shipment?.docketInfo[0]["C/nee City"]
                    : ""}
                </span>
              </div>
            </div>
          </div>

          <div className="py-2">
            <div className="flex items-center gap-2">
              <img
                src="/images/shipment-progress.svg"
                alt="shipment-progress"
                className="w-8"
              />
              <h1 className="text-lg font-bold">Shipment Progress</h1>
            </div>

            <div className="relative overflow-x-auto my-4">
              <table className="w-full text-left border border-t-0 rounded-md">
                <thead className="bg-neutral-200 text-sm rounded">
                  <tr>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Docket No.
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap ">
                      Booking Date
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      C/Nor City
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Bkg Brn
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      C/Nee City
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Del Brn
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      No. Of PKG
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Curr/Last Loc
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shipment?.docketInfo?.map((info, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {info["Docket No"]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {info["Booking Date"]}
                      </td>
                      <td className="px-6 py-4">{info["C/nor City"]}</td>
                      <td className="px-6 py-4">{info["Bkg Brn"]}</td>
                      <td className="px-6 py-4">{info["C/nee City"]}</td>
                      <td className="px-6 py-4">{info["Del Brn"]}</td>
                      <td className="px-6 py-4 text-center">
                        {info["No. of PKG"]}
                      </td>
                      <td className="px-6 py-4 text-center text-primary">
                        {info["Curr/Last Loc"]}
                      </td>
                      <td className="px-6 py-4">{info["Status"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="relative overflow-x-auto my-8">
              <table className="w-full text-left border border-t-0 rounded-md">
                <thead className="bg-neutral-200 text-sm rounded">
                  <tr>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Invoice No
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap ">
                      Invoice Date
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Consignor Part No.
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Consignee Part No.
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shipment?.invoiceDetails?.map((invoice, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">{invoice["Invoice No."]}</td>
                      <td className="px-6 py-4">{invoice["Date"]}</td>
                      <td className="px-6 py-4">
                        {typeof invoice["Consignor Part No."] === "string"
                          ? invoice["Consignor Part No."]
                          : null}
                      </td>
                      <td className="px-6 py-4">
                        {invoice["Consignee Part No."]}
                      </td>
                      <td className="px-6 py-4">{invoice["Quantity"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="pb-8">
            <div className="flex items-center gap-2">
              <img
                src="/images/shipment-truck.svg"
                alt="shipment-truck"
                className="w-8"
              />
              <h1 className="text-lg font-bold">Additional Info</h1>
            </div>
            <div className="relative overflow-x-auto my-4">
              <table className="w-full text-left border border-t-0 rounded-md">
                <thead className="bg-neutral-200 text-sm rounded">
                  <tr>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Dispatch Date
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap ">
                      From
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      To
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shipment?.challanDetails?.map((info, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">{info["Dispatch Date"]}</td>
                      <td className="px-6 py-4">{info["From"]}</td>
                      <td className="px-6 py-4">{info["To"]}</td>
                      <td className="px-6 py-4">{info["Status"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackShipmentModal;
