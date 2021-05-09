<template>
  <div>
    <ur-table class="table" :data="tableData" style="width: 100%">
      <ur-table-column prop="date" label="日期" width="180"></ur-table-column>
      <ur-table-column prop="name" label="姓名" width="180"></ur-table-column>
      <ur-table-column prop="address" label="地址"></ur-table-column>
    </ur-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2021-05-01',
          name: '梁梓豪',
          address: '广东省东莞市松山湖',
        },
        {
          date: '2021-05-02',
          name: '梁梓豪',
          address: '广东省东莞市松山湖',
        },
        {
          date: '2021-05-03',
          name: '梁梓豪',
          address: '广东省东莞市松山湖',
        },
        {
          date: '2021-05-04',
          name: '梁梓豪',
          address: '广东省东莞市松山湖',
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style>
.table {
  width: 60rem;
  margin: 0 auto;
}
.table-title {
  display: block;
  margin: 0.8rem 0;
  font-size: 1.5rem;
}
</style>