import {formatDate, formatNumber, getFilename} from "./utils.js";
import pdfMake from "../../../_snowpack/pkg/pdfmake/build/pdfmake.min.js";
import pdfFonts from "./vfs_fonts.js";
pdfMake.vfs = pdfFonts;
export const downloadPdf = (data) => {
  const contributionTableBody = [
    [
      {text: "Salaire brut", style: "tableHeader"},
      "",
      {
        text: formatNumber(data.incomeGross, 2) + " CHF",
        style: "tableHeader",
        alignment: "right"
      }
    ],
    ...data.contributions.map((item) => [
      item.label,
      {text: item.rate ? item.rate + "%" : "", alignment: "right"},
      {
        text: formatNumber(item.amount, 2) + " CHF",
        alignment: "right"
      }
    ]),
    [
      {text: "Net income", style: "tableTotal"},
      "",
      {
        text: formatNumber(data.incomeNet, 2) + " CHF",
        style: "tableTotal",
        alignment: "right"
      }
    ]
  ];
  if (data.afterTax) {
    contributionTableBody.push([
      data.afterTax.contributions[0].label,
      {
        text: data.afterTax.contributions[0].rate + "%",
        alignment: "right"
      },
      {
        text: formatNumber(data.afterTax.contributions[0].amount, 2) + " CHF",
        alignment: "right"
      }
    ]);
    contributionTableBody.push([
      {text: "Salaire Net", alignment: "tableTotal"},
      "",
      {
        text: formatNumber(data.incomeNet, 2) + " CHF",
        alignment: "right"
      }
    ]);
  }
  const docDefinition = {
    content: [
      {
        table: {
          widths: ["*"],
          body: [
            [
              {
                text: data.company,
                alignment: "right",
                border: [false, true, false, true],
                margin: [0, 10, 0, 10]
              }
            ]
          ]
        },
        margin: [0, 0, 0, 80]
      },
      {
        columns: [
          {text: "No. salarié", width: 80},
          {text: data.user.id.toString()},
          {text: "Monsieur", width: "50%"}
        ]
      },
      {
        columns: [
          "",
          {
            text: `${data.user.firstName} ${data.user.lastName}`,
            margin: [0, 0, 0, 100]
          }
        ]
      },
      {
        columns: [
          {
            text: `Décompte de salaire ${data.dateStart} - ${data.dateEnd}`,
            style: "header",
            width: "75%"
          },
          {
            text: "Emis: " + formatDate(data.dateAdded),
            alignment: "right"
          }
        ]
      },
      {
        style: "myTable",
        layout: "noBorders",
        table: {
          heights: 25,
          widths: ["50%", 100, "*"],
          headerRows: 1,
          body: contributionTableBody
        }
      }
    ],
    styles: {
      header: {
        fontSize: 14,
        bold: true,
        margin: [0, 0, 0, 40]
      },
      tableHeader: {
        bold: true
      },
      tableTotal: {
        bold: true
      },
      myTable: {
        fontSize: 12
      }
    }
  };
  pdfMake.createPdf(docDefinition).download(getFilename(data));
};
