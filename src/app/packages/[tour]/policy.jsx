'use client'

import './tour.css';
import { useState, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Policy() {

    // Keeps track of the subheading under policy which is to be expanded, initially all subheadings are collapsed. 0 indicates none of the subheadings.
    const [active, setActive] = useState(0); 

    // references body of description inside each subheadings in policy. It is used here to dynamically calculate the height of div, so that transition from hidden-div to show-div can be implemented smoothly
    const contentRef = useRef([]);


    // On detection of click on any of the subheadings, it checks the previously active subheading and accordingly expands or collapses the description of the subheadings by updating the height of the subheadings engaged.
    const toggleActive = (id) => {
        //calculate scrollheight of the description div whose subheading is clicked
        const contentElement = contentRef.current[id];
        const height = contentElement.scrollHeight;

        setActive((prev) => {
            // if previously active element is clicked, set its heigth to 0px and update active state to 0.
            if(prev === id)
            {
                contentElement.style.maxHeight = `0px`;
                return 0;
            }

            // else update the height of the currently clicked div's description to its scrollheight. Also, if previously there was any active element, set its height to 0px in order to collapse/hide it
            else
            {
                contentElement.style.maxHeight = `${height}px`;
                if(prev)
                {
                    const prevElement = contentRef.current[prev];
                    prevElement.style.maxHeight = '0';

                }
                
                return id;
            }
        });
    }

    return (
        <div>

            <div className='mb-2 w-3/5'>
                <h3 className='font-bold text-2xl'>Policy</h3>
            </div>

            <div>
                {/* On detecting a click, set or unset this div to active according to previously active element */}
                <div 
                className="policy-subheading flex relative font-semibold text-sm mb-2 px-4 py-2"
                onClick={() => toggleActive(1)}>

                    <h6>Inclusions</h6>

                    {/* Arrow is transitioned to rotate b/w 0 degree and -90 degree according to open and close   */}
                    <ExpandMoreIcon className={`absolute right-2 ${active===1 ? 'expand' : 'shrink'}`}/>

                </div>

                {/* description div is expanded or collapsed by transitioning its max-height between 0px and scrollHeight according to show-div and hidden-div */}
                <div 
                ref={(ele) => contentRef.current[1] = ele}  //index 1 refers the Inclusion subheading
                className={`text-xs pl-8 ${active === 1 ? 'show-div' : 'hidden-div'}`}>
                    <ul className='list-square policy-list'>
                        <li>Transfers by AC Vehicle</li>
                        <li>Assistance on Arrival</li>
                        <li>All sightseeing as per Itinerary by AC Vehicle</li>
                        <li>Accommodation on a Double/Twin Sharing Basis with Breakfast</li>
                        <li>Driver charge / Bhatta, Toll, Tax, Parking Charge etc.</li>
                    </ul>
                </div>
            </div>

            <div>
                {/* On detecting a click, set or unset this div to active according to previously active element */}
                <div 
                className="policy-subheading flex relative font-semibold text-sm mb-2 px-4 py-2"
                onClick={() => toggleActive(2)}>

                    <h6>Exclusions</h6>

                    {/* Arrow is transitioned to rotate b/w 0 degree and -90 degree according to open and close   */}
                    <ExpandMoreIcon className={`absolute right-2 ${active===2 ? 'expand' : 'shrink'}`}/>

                </div>

                {/* description div is expanded or collapsed by transitioning its max-height between 0px and scrollHeight according to show-div and hidden-div */}
                <div 
                ref={(ele) => contentRef.current[2] = ele} //index 2 refers the Exclusion subheading
                className={`text-xs pl-8 ${active === 2 ? 'show-div' : 'hidden-div'}`}>
                    <ul className='list-square policy-list'>
                        <li>Airfare/ Train fare 5% GST</li>
                        <li>Boat Ride</li>
                        <li>Guide Charges/Language spoken Monuments entrance fees</li>
                        <li>Travel Insurance</li>
                        <li>Personal Expenses such as drinks, telephone, laundry bills, etc.</li>
                        <li>Any additional expenses incurred due to any flight delay or cancellation, weather conditions, political closures, technical faults, etc.</li>
                        <li>Any other service/s not specified above. Temple Puja</li>
                        <li>Monument entry fee</li>
                    </ul>
                </div>
            </div>


            <div>
                {/* On detecting a click, set or unset this div to active according to previously active element */}
                <div 
                className="policy-subheading flex relative font-semibold text-sm mb-2 px-4 py-2"
                onClick={() => toggleActive(3)}>

                    <h4>Cancellation Policy</h4>

                    {/* Arrow is transitioned to rotate b/w 0 degree and -90 degree according to open and close   */}
                    <ExpandMoreIcon className={`absolute right-2 ${active===3 ? 'expand' : 'shrink'}`}/>

                </div>

                {/* description div is expanded or collapsed by transitioning its max-height between 0px and scrollHeight according to show-div and hidden-div */}
                <div 
                ref={(ele) => contentRef.current[3] = ele} //index 3 refers the Cancellation subheading
                className={`text-xs pl-8 ${active === 3 ? 'show-div' : 'hidden-div'}`}>
                    <ul className='list-square policy-list'>
                        <li><span className='font-semibold'>Cancellations Received on or Before 30 Days:</span> A 10% processing fee of the total package cost will be charged.</li>
                        <li><span className='font-semibold'>Cancellations Between 20 and 29 Days:</span> 50% of the total package cost will be retained as a cancellation fee.</li>
                        <li><span className='font-semibold'>Cancellations Less Than 20 Days of Arrival or No Shows:</span> No refund will be provided, regardless of the reason or circumstances, including Acts of God.</li>
                        <li><span className='font-semibold'>Bookings Made During Peak Season (December 15th to January 15th):</span> No refunds will be provided for cancellations made during this period.</li>
                        <li><span className='font-semibold'>Transport Ticket Cancellations:</span> Cancellation charges for any type of transport ticket will be applicable as per the rules of the concerned authority.</li>
                    </ul>
                </div>
            </div>


            <div>
                {/* On detecting a click, set or unset this div to active according to previously active element */}
                <div 
                className="policy-subheading flex relative font-semibold text-sm mb-2 px-4 py-2"
                onClick={() => toggleActive(4)}>

                    <h4>Terms & Conditions</h4>

                    {/* Arrow is transitioned to rotate b/w 0 degree and -90 degree according to open and close   */}
                    <ExpandMoreIcon className={`absolute right-2 ${active===4 ? 'expand' : 'shrink'}`}/>
                    
                </div>

                {/* description div is expanded or collapsed by transitioning its max-height between 0px and scrollHeight according to show-div and hidden-div */}
                <div
                ref={(ele) => contentRef.current[4] = ele} //index 4 refers the Terms & Conditions subheading
                className={`text-xs pl-8 ${active === 4 ? 'show-div' : 'hidden-div'}`}>
                    <ul className='list-square policy-list'>
                        <li><span className='font-semibold'>Transport Rate Adjustment:</span> The transportation rate provided is based on the current fuel price. Any increase in fuel prices will be reflected in the vehicle rate quoted/confirmed to you. The final transportation cost will be communicated 7 days before the start of the tour. The transport service will only be re-confirmed upon acceptance of the revised quote (if applicable). We sincerely regret any inconvenience this may cause and appreciate your understanding as we strive to serve you better in light of fluctuating fuel prices.</li>
                        <li><span className='font-semibold'>Tentative Rates:</span> The rates provided are a tentative offer for your reference. Final rates will be confirmed upon the finalization of services.</li>
                        <li><span className='font-semibold'>Service Availability:</span> The confirmation of the above-mentioned services is subject to availability at the time of booking.</li>
                        <li><span className='font-semibold'>Additional Services:</span> The quoted rates are based on the specific requirements mentioned in our communication. Any additional services requested will be considered separate and may incur extra charges as applicable.</li>
                        <li><span className='font-semibold'>Alternative Arrangements:</span>  If the originally proposed hotels or transportation services are unavailable, alternative options (which may not be similar) will be suggested. Any changes in the cost (whether higher or lower) will be communicated, and we will proceed upon receiving your approval.</li>
                        <li><span className='font-semibold'>Rate Adjustments:</span>   Any changes in hotel rates, transportation costs, taxes, or charges for other services between the proposal and confirmation periods will be applied and communicated upon confirmation. These adjustments will be valid until the final payment settlement.</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}