const app = {
    data() {
        return {
            tasks: [{
                    title: 'ShiragaP',
                    detail: "Role: Producer @PRISMA",
                    url: './images/1.png',
                    done: false,
                    count: 864
                },
                {
                    title: 'Peony',
                    detail: "Role: Content Manager @PRISMA",
                    url: './images/2.png',
                    done: false,
                    count: 230
                },
                {
                    title: 'Together',
                    detail: "since October 5th, 2020 ",
                    url: './images/3.jpg',
                    done: false,
                    count: 32
                },
            ],
            filterResult: null,
            useSearch: false,
            hasView: false,
            viewPic: '',
            inputSearch: ''

        }

    },
    methods: {
        toggleLike(index) {
            if (this.tasks[index].done) {
                this.tasks[index].done = !this.tasks[index].done
                this.tasks[index].count -= 1
            } else {
                this.tasks[index].done = !this.tasks[index].done
                this.tasks[index].count += 1
            }
        },
        toggleSearch() {
            this.filterResult = null;
            this.useSearch = !this.useSearch
        },
        toggleView(index) {
            this.viewPic = this.tasks[index].url;
            this.hasView = true;
        }


    },

    computed: {
        countLike() {
            return this.tasks.filter(i => i.done).length
        },
        countPic() {
            return this.tasks.filter(i => i).length
        },
        // filterSearch() {
        //     this.filterResult = this.tasks.filter(pic => pic.title.toLowerCase().search(this.inputSearch.toLowerCase()) > -1);

        // },

        filterSearch() {
            return this.tasks.filter(pic => {
                return pic.title.toLowerCase().includes(this.inputSearch.toLowerCase())
            })

        },
        choosePicture() {
            return this.filterResult ? this.filterResult : this.picture;
        }
    }

}
mountedApp = Vue.createApp(app).mount('#app')