<template>
  <div class="info">
    <div class="avatar">
      <img src="../assets/avatar.jpg" />
    </div>
    <div class="info_content">
      <p class="name">
        {{info.name}}
        <a href="https://github.com/Zimomo333" target="_blank">
          <ur-button class="space" circle>
            <svg
              t="1620687606295"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1626"
              width="24"
              height="24"
            >
              <path
                d="M0 524.992q0 166.016 95.488 298.496t247.488 185.504q6.016 0.992 10.016 0.992t6.496-1.504 4-3.008 2.016-4.992 0.512-4.992v-100.512q-36.992 4-66.016-0.512t-45.504-14.016-28.992-23.488-16.992-25.504-8.992-24-5.504-14.496q-8.992-15.008-27.008-27.488t-27.008-20-2.016-14.496q50.016-26.016 112.992 66.016 34.016 51.008 119.008 30.016 10.016-40.992 40-70.016Q293.984 736 237.984 670.976t-56-158.016q0-87.008 55.008-151.008-22.016-64.992 6.016-136.992 28.992-2.016 64.992 11.488t50.496 23.008 25.504 17.504q56.992-16 128.512-16t129.504 16q12.992-8.992 28.992-19.008t48.992-21.504 60.992-9.504q27.008 71.008 7.008 135.008 56 64 56 151.008 0 92.992-56.992 158.496t-172 85.504q43.008 43.008 43.008 104v128.992q0 0.992 0.992 3.008 0 6.016 0.512 8.992t4.512 6.016 12 3.008q152.992-52 250.496-185.504t97.504-300.512q0-104-40.512-199.008t-108.992-163.488-163.488-108.992T512.032 12.96 313.024 53.472 149.536 162.464t-108.992 163.488-40.512 199.008z"
                p-id="1627"
                fill="#707070"
              />
            </svg>
          </ur-button>
        </a>
        <a href="mailto:lzh120908717@gmail.com" target="_blank">
          <ur-button class="space" circle>
            <svg
              t="1620687690371"
              class="icon"
              viewBox="0 0 1365 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2657"
              width="24"
              height="24"
            >
              <path
                d="M1365.203314 853.252071a168.115037 168.115037 0 0 1-22.135797 81.814685L911.955814 453.052471 1338.581849 82.009713a169.285211 169.285211 0 0 1 26.621465 90.493477v680.553852zM682.601657 540.718027L1275.587468 21.258166a167.627464 167.627464 0 0 0-81.814684-21.258166H169.967813A168.992667 168.992667 0 0 0 87.76307 21.258166z m163.824398-31.887249L709.223122 629.553757a40.858585 40.858585 0 0 1-56.070851 0L515.851824 508.830778l-434.03714 488.547757a168.212551 168.212551 0 0 0 90.103419 26.231407h1023.902486a168.212551 168.212551 0 0 0 90.103418-26.231407L848.376345 508.830778h-1.95029zM26.621465 82.009713A169.967813 169.967813 0 0 0 0 170.942958v682.601657a167.724979 167.724979 0 0 0 22.135797 81.814684l430.81916-482.014284L26.718979 82.78983z m0 0z"
                p-id="2658"
                fill="#707070"
              />
            </svg>
          </ur-button>
        </a>
        <a href="http://zimomo.top/" target="_blank">
          <ur-button class="space" circle>
            <svg
              t="1620688021085"
              class="icon"
              viewBox="0 0 1000 1000"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9164"
              width="24"
              height="24"
            >
              <path
                d="M980.779 968.702l0.212-21.22c0-503.961-408.557-912.5-912.539-912.5l-21.221 0.212v148.334c433.662 0 785.207 351.537 785.207 785.174h148.34zM641.018 968.702l0.423-21.22c0-316.444-256.531-572.965-572.989-572.965l-21.221 0.423v148.123c246.132 0 445.659 199.517 445.659 445.641h148.129zM47.231 841.374c0 70.324 57.006 127.328 127.33 127.328 70.327 0 127.33-57.004 127.33-127.328 0-70.315-57.003-127.322-127.33-127.322-70.324-0.001-127.33 57.007-127.33 127.322z"
                p-id="9165"
                fill="#707070"
              />
            </svg>
          </ur-button>
        </a>
      </p>
      <p class="sex">
        <span>{{info.sex}}</span>
        <span>{{info.age}} 岁</span>
      </p>
      <div class="tag">
        <ur-tag
          class="space"
          v-for="(tag, index) in info.tags"
          :key="tag.name"
          closable
          :type="tag.type"
          @close="handleClose(index)"
        >{{tag.name}}</ur-tag>
      </div>
      <ur-input
        readonly
        class="textarea"
        type="textarea"
        autosize
        resize="none"
        placeholder="请输入内容"
        v-model="info.message"
      ></ur-input>
      <ur-button class="edit_button" @click="handleEdit">编辑信息</ur-button>
    </div>

    <ur-dialog title="编辑信息" v-model="dialogFormVisible">
      <ur-form class="form" :model="form" label-width="60px">
        <ur-form-item label="用户名">
          <ur-input readonly v-model="form.name" autocomplete="off"></ur-input>
        </ur-form-item>
        <ur-form-item label="性别">
          <ur-radio-group v-model="form.sex">
            <ur-radio label="GG">GG</ur-radio>
            <ur-radio label="MM">MM</ur-radio>
          </ur-radio-group>
        </ur-form-item>
        <ur-form-item label="年龄">
          <ur-input-number class="age" v-model="form.age"></ur-input-number>
        </ur-form-item>
        <ur-form-item label="标签">
          <ur-select v-model="form.tags" multiple placeholder="请选择">
            <ur-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></ur-option>
          </ur-select>
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
import { h } from 'vue';

export default {
  data() {
    return {
      dialogFormVisible: false,
      info: {
        name: 'Zimomo',
        sex: 'GG',
        age: 22,
        tags: [
          { name: 'Vue', type: 'success' },
          { name: '完美主义', type: 'danger' },
          { name: 'Node.js', type: 'info' },
          { name: 'TypeScript', type: '' },
        ],
        message: `好好学习，天天向上！\n好好学习，天天向上！\n好好学习，天天向上！\n好好学习，天天向上！`,
      },
      form: {
        name: '',
        sex: '',
        age: '',
        tags: [],
        message: '',
      },
      options: [
        {
          value: JSON.stringify({ name: 'Vue', type: 'success' }),
          label: 'Vue',
        },
        {
          value: JSON.stringify({ name: '完美主义', type: 'danger' }),
          label: '完美主义',
        },
        {
          value: JSON.stringify({ name: 'Node.js', type: 'info' }),
          label: 'Node.js',
        },
        {
          value: JSON.stringify({ name: 'TypeScript', type: '' }),
          label: 'TypeScript',
        },
        {
          value: JSON.stringify({ name: 'React', type: '' }),
          label: 'React',
        },
      ],
    };
  },
  methods: {
    handleClose(index) {
      this.info.tags.splice(index, 1);
    },
    handleEdit() {
      this.dialogFormVisible = true;
      this.form = JSON.parse(JSON.stringify(this.info));
      if (this.form.tags.length) {
        this.form.tags = this.form.tags.map(tag => JSON.stringify(tag));
      }
    },
    handleInfoChange() {
      this.dialogFormVisible = false;
      this.form.tags = this.form.tags.map(tag => JSON.parse(tag));
      this.info = this.form;
      this.$notify({
        title: '编辑成功',
        message: h('i', { style: 'color: green' }, '编辑成功！'),
      });
    },
  },
};
</script>

<style lang="scss">
.info {
  .avatar {
    position: relative;
    top: -2rem;
    left: 3rem;
    width: 12rem;
    height: 12rem;
    box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #e6e7ee;
    z-index: 2;
    img {
      border-radius: 50%;
      width: 12rem;
      height: 12rem;
    }
  }
  .info_content {
    position: relative;
    top: -10rem;
    border: 0.0625rem solid #d1d9e6;
    border-radius: 0.55rem;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff;
    width: 40rem;
    height: 30rem;
    padding: 8rem 4rem 0;
    z-index: 1;

    .textarea {
      margin: 2rem 0 0;
      width: 40rem;
      height: 30rem;
    }

    .space {
      margin-right: 1rem;
    }

    .name {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 0;
    }

    .sex {
      font-size: 2rem;
      margin: 1rem 0.5rem 1.5rem;
      span {
        margin-right: 2rem;
      }
    }

    .edit_button {
      position: absolute;
      right: 4rem;
      bottom: 2rem;
    }
  }

  .form {
    padding-left: 1rem;
    .message {
      width: 30rem;
    }
    .age {
      .ur-input__inner {
        margin-left: 2rem;
      }
    }
  }

  .dialog_button {
    margin-right: 1rem;
  }
}
</style>