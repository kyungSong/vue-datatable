export default {
  table: {
    tableWrapper: "v-data-table__overflow",
    tableClass: "v-data-table__wrapper theme--light",
    loadingClass: 'loading',
    detailRowClass: "vuetable-detail-row",
    tableBodyWrapper: "v-data-table__overflow",
    tableBodyClass: "text-xs-center",
    tableHeaderClass: "fit-nowrap v-data-table-header",
    tableFooterClass: "v-data-footer",
    ascendingIcon: "fa fa-chevron-up",
    descendingIcon: "fa fa-chevron-down",
    sortableIcon: "fa fa-sort"
  },

  pagination: {
    wrapperClass: 'v-pagination v-pagination--circle theme--light text-xs-center',
    activeClass: 'v-pagination__item--active primary',
    disabledClass: 'disabled',
    pageClass: 'v-pagination__item',
    linkClass: 'v-pagination__navigation',
    paginationClass: 'v-pagination v-pagination--circle theme--light',
    icons: {
      first: "fa fa-angle-double-left",
      prev: "fa fa-angle-left",
      next: "fa fa-angle-right",
      last: "fa fa-angle-double-right",
    },
  }
}
