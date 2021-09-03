import './LayoutSample.css';
import KendokaLogo from './logo2.png';
import {
	Chart,
	ChartLegend,
	ChartSeries,
	ChartSeriesItem,
	ChartSeriesLabels,
	ChartCategoryAxis,
	ChartCategoryAxisItem
} from '@progress/kendo-react-charts';
//import 'hammerjs';
import { Button } from '@progress/kendo-react-buttons';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { DropDownList } from '@progress/kendo-react-dropdowns';

import sampleData from './invoice-data.json';
import { useRef, useState, useEffect } from 'react';

function LayoutSample() {
	const pdfExportComponent = useRef(null);
	const [layoutSelection, setLayoutSelection] = useState({ text: "A4", value: "size-a4"});
	
	const ddData = [{ text: "A4", value: "size-a4" },
	                { text: "Letter", value: "size-letter" },
									{ text: "Executive", value: "size-executive" }
								 ];

	const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  }

	const updatePageLayout = (event) => {
		setLayoutSelection(event.target.value);
	}

  return(
    <div id="example">
			<div className="box wide hidden-on-narrow">
				<div className="box-col">
					<h4>Select a Page Size</h4>
					<DropDownList
							data={ddData}
							textField="text"
							dataItemKey="value"
							value={layoutSelection}
							onChange={updatePageLayout}
					>
					</DropDownList>
				</div>
				<div className="box-col">
					<h4>Export PDF</h4>
	    	  <Button primary={true} onClick={handleExportWithComponent}>Export</Button>
				</div>
			</div>
			<div className="page-container hidden-on-narrow">
				<PDFExport ref={pdfExportComponent}>
					<div className={ `pdf-page ${ layoutSelection.value }` }>
						<div className="inner-page">
							<div className="pdf-header">
								<span className="company-logo">
									<img src={KendokaLogo} alt="Kendoka Company Logo" /> Startup Door Cooperation
								</span>
								<span className="invoice-number">Invoice #23543</span>
							</div>
							<div className="pdf-footer">
								<p>
									No 49 , Sahan Avenue<br />
									2nd Cross Road<br />
									Nugegoda,Colombo, Sri Lanka
								</p>
							</div>
							<div className="addresses">
								<div className="for">
									<h3>Invoice For</h3>
									<p>
										Tharaka Athukorala<br />
										No 143/A , Supun Avenue<br />
										Kaduwela,Sri Lanka
									</p>
								</div>

								<div className="from">
									<h3>From</h3>
									<p>
										Pasan Bashitha <br />
										No 123/A , Missaka Mawatha<br />
										Dehiwala, Sri Lanka
									</p>
									<p>
										Invoice ID: 23543<br />
										Invoice Date: 12.03.2021<br />
										Due Date: 27.03.2021
									</p>
								</div>
							</div>
							<div className="pdf-chart">
								<Chart style={{ height: 280 }}>
									<ChartSeries>
										<ChartSeriesItem
												type="donut"
												data={sampleData}
												categoryField="product"
												field="share"
										>
											<ChartSeriesLabels
													color="#fff"
													background="none"
											/>
										</ChartSeriesItem>
									</ChartSeries>
								</Chart>
							</div>
							
							<div className="pdf-body">
								<div id="grid"></div>
								<p className="signature">
									Signature: ________________ <br /><br />
									Date: 12.03.2014
								</p>
							</div>
						</div>
					</div>
				</PDFExport>
			</div>
		</div>
  );
}

export default LayoutSample;