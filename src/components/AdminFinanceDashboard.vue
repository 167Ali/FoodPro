<template>
    <div class="admin-dashboard">
      <!-- Search Dropdown -->
      <div class="container">
        <div class="row mb-4">
          <div class="col-md-3"> <!-- Adjusted column size -->
            <select
              v-model="selectedCompany"
              @change="filterCompanies"
              class="form-control custom-dropdown" >
              <option value="">Select a company</option>
              <option v-for="(company, index) in companies" :key="index" :value="company.name">
                {{ company.name }}
              </option>
            </select>
          </div>
        </div>
  
        <!-- Summary Overview -->
        <div class="row">
          <div class="col-md-3" v-for="(metric, index) in summaryMetrics" :key="index">
            <div class="card text-center bg-dark-green p-3 shadow hover-card">
              <div class="card-body">
                <h5 class="card-title text-white">{{ metric.title }}</h5>
                <p class="card-text display-6 text-white">{{ metric.value }}</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Company Financial Breakdown -->
        <div class="my-5 white-bg p-4 rounded shadow">
          <h4>Company Financial Breakdown</h4>
          <table class="table custom-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Total Sales</th>
                <th>Commission Rate</th>
                <th>Net Profit</th>
                <th>Outstanding Payments</th>
                <th>Payout History</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(company, index) in filteredCompanies" :key="index">
                <td>{{ company.name }}</td>
                <td>{{ company.totalSales }}</td>
                <td>{{ company.commissionRate }}%</td>
                <td>{{ company.netProfit }}</td>
                <td>{{ company.outstandingPayments }}</td>
                <td>{{ company.payoutHistory }}</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Order & Transaction Summary -->
        <div class="row" v-if="filteredCompanies.length === 1">
          <div class="col-md-6">
            <div class="card white-bg p-3 shadow hover-card">
              <div class="card-body">
                <h5 class="card-title">Earnings Summary</h5>
                <ul class="list-group">
                  <li class="list-group-item">Daily Earnings: $2,000</li>
                  <li class="list-group-item">Weekly Earnings: $10,000</li>
                  <li class="list-group-item">Monthly Earnings: $40,000</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card white-bg p-3 shadow hover-card">
              <div class="card-body">
                <h5 class="card-title">Order Status Breakdown</h5>
                <ul class="list-group">
                  <li class="list-group-item">Completed Orders: 2,800</li>
                  <li class="list-group-item">Cancelled Orders: 150</li>
                  <li class="list-group-item">Pending Orders: 250</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  // Dummy data for companies
  const companies = ref([
    {
      name: 'Company A',
      totalSales: '$15,000',
      commissionRate: 10,
      netProfit: '$13,500',
      outstandingPayments: '$1,500',
      payoutHistory: '$10,000',
    },
    {
      name: 'Company B',
      totalSales: '$25,000',
      commissionRate: 12,
      netProfit: '$22,000',
      outstandingPayments: '$3,000',
      payoutHistory: '$18,000',
    },
    {
      name: 'Company C',
      totalSales: '$10,000',
      commissionRate: 8,
      netProfit: '$9,200',
      outstandingPayments: '$800',
      payoutHistory: '$7,000',
    },
  ])
  
  const selectedCompany = ref('')
  
  // Computed property to filter companies based on selected dropdown
  const filteredCompanies = computed(() => {
    return selectedCompany.value
      ? companies.value.filter(company => company.name === selectedCompany.value)
      : companies.value
  })
  
  // Dummy summary metrics
  const summaryMetrics = computed(() => {
    const totalEarnings = filteredCompanies.value.reduce((acc, company) => acc + parseInt(company.totalSales.replace('$', '')), 0)
    const totalOrders = 3200
    const totalCommissions = 12000
    const totalPayouts = 35000
  
    return [
      { title: 'Total Earnings', value: `$${totalEarnings}` },
      { title: 'Total Orders', value: totalOrders },
      { title: 'Total Commissions Earned', value: `$${totalCommissions}` },
      { title: 'Total Payouts', value: `$${totalPayouts}` },
    ]
  })
  </script>
  
  <style scoped>
  /* Overall Dashboard Background */
  .admin-dashboard {
    background-color: #f1f1f1;
    padding: 20px;
    min-height: 100vh;
  }
  
  /* White background for divs */
  .white-bg {
    background-color: #ffffff;
    border-radius: 10px;
  }
  
  /* Dark green background for summary cards */
  .bg-dark-green {
    background-color: #00754A;
  }
  
  /* Card Styling with hover transition */
  .card {
    border: none;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  
  /* Search dropdown styling */
  .custom-dropdown {
    background-color: #A3D7B5; /* Lighter shade of #00754A */
    border: 1px solid #00754A; /* Border color to match */
  }
  
  /* Custom Table Styling */
  .custom-table {
    border-radius: 10px;
    background-color: #ffffff;
    margin-top: 20px;
  }
  
  .custom-table thead {
    background-color: #00754A;
    color: #fff;
  }
  
  .custom-table th,
  .custom-table td {
    vertical-align: middle;
    padding: 15px;
    text-align: center;
  }
  
  .custom-table tbody tr:hover {
    background-color: rgba(0, 117, 74, 0.1);
  }
  
  .custom-table th {
    font-weight: bold;
    letter-spacing: 0.5px;
  }
  
  .custom-table td {
    color: #333;
  }
  
  /* Button Styling */
  .btn-success {
    background-color: #00754A;
    border-color: #00754A;
  }
  
  .btn-success:hover {
    background-color: #005f3c;
    border-color: #005f3c;
  }
  
  /* Hover card effect */
  .hover-card {
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  
  .hover-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  /* List group styling */
  .list-group-item {
    border: none;
  }
  </style>
  