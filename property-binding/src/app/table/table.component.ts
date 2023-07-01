import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  tableData:string=
  `<table>
      <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
      </tr>
      <tr>
          <td>Rajendra</td>
          <td>28</td>
          <td>Rajendra@gmail.com</td>
      </tr>
      <tr>
          <td>Ramu</td>
          <td>25</td>
          <td>Ramu@gmail.com</td>
      </tr>
      <tr>
          <td>Vamsi</td>
          <td>26</td>
          <td>Vamsi@gmail.com</td>
      </tr>
      <tr>
          <td>Raju</td>
          <td>27</td>
          <td>Raju@gmail.com</td>
      </tr>
  </table>`;

}
