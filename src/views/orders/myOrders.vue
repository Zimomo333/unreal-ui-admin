<template>
  <div>
    <ur-table class="table" height="650" :data="dataFilter" stripe border>
      <ur-table-column sortable prop="id" label="ID" width="80"></ur-table-column>
      <ur-table-column prop="name" label="姓名" width="130"></ur-table-column>
      <ur-table-column sortable prop="datetime" label="日期" width="160"></ur-table-column>
      <ur-table-column prop="province" label="省份" width="140"></ur-table-column>
      <ur-table-column prop="email" label="邮箱" width="190"></ur-table-column>
      <ur-table-column prop="message" label="信息" width="660"></ur-table-column>
      <ur-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <ur-button
            class="table_button"
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</ur-button>
          <ur-button
            class="table_button"
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</ur-button>
        </template>
      </ur-table-column>
    </ur-table>

    <div class="pagination">
      <ur-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></ur-pagination>
    </div>

    <ur-dialog title="编辑信息" v-model="dialogFormVisible">
      <ur-form class="form" :model="form">
        <ur-form-item label="ID　" :label-width="400">
          <ur-input class="id_style" readonly v-model="form.id" autocomplete="off"></ur-input>
        </ur-form-item>
        <ur-form-item label="日期">
          <ur-date-picker
            v-model="form.datetime"
            type="datetime"
            placeholder="选择日期时间"
            :shortcuts="shortcuts"
          ></ur-date-picker>
        </ur-form-item>
        <ur-form-item label="姓名">
          <ur-input v-model="form.name" autocomplete="off"></ur-input>
        </ur-form-item>
        <ur-form-item label="省份">
          <ur-input v-model="form.province" autocomplete="off"></ur-input>
        </ur-form-item>
        <ur-form-item label="邮箱">
          <ur-input v-model="form.email" autocomplete="off"></ur-input>
        </ur-form-item>
        <ur-form-item label="信息">
          <ur-input
            class="message"
            type="textarea"
            autosize
            format
            v-model="form.message"
            autocomplete="off"
          ></ur-input>
        </ur-form-item>
      </ur-form>
      <template #footer>
        <span class="dialog-footer">
          <ur-button class="dialog_button" @click="dialogFormVisible = false">取 消</ur-button>
          <ur-button @click="handleInfoChange">确 定</ur-button>
        </span>
      </template>
    </ur-dialog>
  </div>
</template>

<script>
import { getTableData } from '../../api/table';

export default {
  data() {
    return {
      dialogFormVisible: false,
      page: 1,
      pageSize: 10,
      editIndex: null,
      form: {
        datetime: '',
        name: '',
        province: '',
      },
      tableData: [],
      shortcuts: [
        {
          text: '今天',
          value: new Date(),
        },
        {
          text: '昨天',
          value: (() => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date;
          })(),
        },
        {
          text: '一周前',
          value: (() => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date;
          })(),
        },
      ],
    };
  },
  computed: {
    total() {
      return this.tableData.length;
    },
    dataFilter() {
      const head = (this.page - 1) * this.pageSize;
      const end = head + this.pageSize;
      return this.tableData.slice(head, end);
    },
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      getTableData().then(res => {
        this.tableData = res.data;
      });
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      this.editIndex = index;
      this.form = JSON.parse(JSON.stringify(row));
    },
    handleDelete(index) {
      this.tableData.splice(index, 1);
      this.$notify({
        title: '删除成功',
        message: '删除成功！',
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.page = val;
    },
    handleInfoChange() {
      if(typeof(this.form.datetime)==='object'){
        const date = this.form.datetime.toJSON();
        const formatDate = [date.slice(0, 10), date.slice(11, 19)].join(' ');
        this.form.datetime = formatDate;
      }
      this.tableData[this.editIndex] = this.form;
      this.dialogFormVisible = false;
      this.$notify({
        title: '编辑成功',
        message: '编辑成功！',
      });
    }
  },
};
</script>

<style lang="scss">
.table {
  width: 80rem;
}
.table_button {
  margin-left: 0.6rem;
}
.table-title {
  display: block;
  margin: 0.8rem 0;
  font-size: 1.5rem;
}
.pagination {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
}
.ur-dialog__header {
  text-align: center;
}
.form {
  padding-left: 4rem;
  .message {
    width: 30rem;
  }
}
.dialog_button {
  margin: 0 1rem;
}
</style>