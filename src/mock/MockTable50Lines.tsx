import React from 'react';

import ReactDOM from 'react-dom/client';

import { wrapDataTable } from '../DataTable';

const tableHTML = (
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>col1</th>
        <th>col2</th>
        <th>col3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>a6</td>
        <td>b6</td>
        <td>c6</td>
      </tr>
      <tr>
        <td>a7</td>
        <td>b7</td>
        <td>c7</td>
      </tr>
      <tr>
        <td>a8</td>
        <td>b8</td>
        <td>c8</td>
      </tr>
      <tr>
        <td>a9</td>
        <td>b9</td>
        <td>c9</td>
      </tr>
      <tr>
        <td>a10</td>
        <td>b10</td>
        <td>c10</td>
      </tr>
      <tr>
        <td>a1</td>
        <td>b1</td>
        <td>c1</td>
      </tr>
      <tr>
        <td>a2</td>
        <td>b2</td>
        <td>c2</td>
      </tr>
      <tr>
        <td>a3</td>
        <td>b3</td>
        <td>c3</td>
      </tr>
      <tr>
        <td>a4</td>
        <td>b4</td>
        <td>c4</td>
      </tr>
      <tr>
        <td>a5</td>
        <td>b5</td>
        <td>c5</td>
      </tr>
      <tr>
        <td>a11</td>
        <td>b11</td>
        <td>c11</td>
      </tr>
      <tr>
        <td>a12</td>
        <td>b12</td>
        <td>c12</td>
      </tr>
      <tr>
        <td>a13</td>
        <td>b13</td>
        <td>c13</td>
      </tr>
      <tr>
        <td>a14</td>
        <td>b14</td>
        <td>c14</td>
      </tr>
      <tr>
        <td>a15</td>
        <td>b15</td>
        <td>c15</td>
      </tr>
      <tr>
        <td>a16</td>
        <td>b16</td>
        <td>c16</td>
      </tr>
      <tr>
        <td>a17</td>
        <td>b17</td>
        <td>c17</td>
      </tr>
      <tr>
        <td>a18</td>
        <td>b18</td>
        <td>c18</td>
      </tr>
      <tr>
        <td>a19</td>
        <td>b19</td>
        <td>c19</td>
      </tr>
      <tr>
        <td>a20</td>
        <td>b20</td>
        <td>c20</td>
      </tr>
      <tr>
        <td>a21</td>
        <td>b21</td>
        <td>c21</td>
      </tr>
      <tr>
        <td>a22</td>
        <td>b22</td>
        <td>c22</td>
      </tr>
      <tr>
        <td>a23</td>
        <td>b23</td>
        <td>c23</td>
      </tr>
      <tr>
        <td>a24</td>
        <td>b24</td>
        <td>c24</td>
      </tr>
      <tr>
        <td>a25</td>
        <td>b25</td>
        <td>c25</td>
      </tr>
      <tr>
        <td>a26</td>
        <td>b26</td>
        <td>c26</td>
      </tr>
      <tr>
        <td>a27</td>
        <td>b27</td>
        <td>c27</td>
      </tr>
      <tr>
        <td>a28</td>
        <td>b28</td>
        <td>c28</td>
      </tr>
      <tr>
        <td>a29</td>
        <td>b29</td>
        <td>c29</td>
      </tr>
      <tr>
        <td>a30</td>
        <td>b30</td>
        <td>c30</td>
      </tr>
      <tr>
        <td>a31</td>
        <td>b31</td>
        <td>c31</td>
      </tr>
      <tr>
        <td>a32</td>
        <td>b32</td>
        <td>c32</td>
      </tr>
      <tr>
        <td>a33</td>
        <td>b33</td>
        <td>c33</td>
      </tr>
      <tr>
        <td>a34</td>
        <td>b34</td>
        <td>c34</td>
      </tr>
      <tr>
        <td>a35</td>
        <td>b35</td>
        <td>c35</td>
      </tr>
      <tr>
        <td>a36</td>
        <td>b36</td>
        <td>c36</td>
      </tr>
      <tr>
        <td>a37</td>
        <td>b37</td>
        <td>c37</td>
      </tr>
      <tr>
        <td>a38</td>
        <td>b38</td>
        <td>c38</td>
      </tr>
      <tr>
        <td>a39</td>
        <td>b39</td>
        <td>c39</td>
      </tr>
      <tr>
        <td>a40</td>
        <td>b40</td>
        <td>c40</td>
      </tr>
      <tr>
        <td>a41</td>
        <td>b41</td>
        <td>c41</td>
      </tr>
      <tr>
        <td>a42</td>
        <td>b42</td>
        <td>c42</td>
      </tr>
      <tr>
        <td>a43</td>
        <td>b43</td>
        <td>c43</td>
      </tr>
      <tr>
        <td>a44</td>
        <td>b44</td>
        <td>c44</td>
      </tr>
      <tr>
        <td>a45</td>
        <td>b45</td>
        <td>c45</td>
      </tr>
      <tr>
        <td>a46</td>
        <td>b46</td>
        <td>c46</td>
      </tr>
      <tr>
        <td>a47</td>
        <td>b47</td>
        <td>c47</td>
      </tr>
      <tr>
        <td>a48</td>
        <td>b48</td>
        <td>c48</td>
      </tr>
      <tr>
        <td>a49</td>
        <td>b49</td>
        <td>c49</td>
      </tr>
      <tr>
        <td>a50</td>
        <td>b50</td>
        <td>c50</td>
      </tr>
    </tbody>
  </table>
);
const DataTables = wrapDataTable(() => tableHTML);

ReactDOM.createRoot(document.getElementById('MockTable50Lines') as HTMLElement).render(
  <React.StrictMode>
    <DataTables />
  </React.StrictMode>,
);
