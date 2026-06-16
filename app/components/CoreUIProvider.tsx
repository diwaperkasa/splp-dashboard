"use client";

import * as coreui from '@coreui/coreui'
import { useEffect } from "react";

export default function CoreUIProvider() {
  useEffect(() => {
    document.querySelector('.header-toggler')?.addEventListener('click', () => {
      const el = document.getElementById('sidebar')

      if (!el) return

      const sidebar = new coreui.Sidebar(el)
      sidebar.toggle()
    })

    document.querySelector('.btn-close')?.addEventListener('click', () => {
      const el = document.getElementById('sidebar')

      if (!el) return

      const sidebar = new coreui.Sidebar(el)
      sidebar.toggle()
    })

    console.log(document.querySelectorAll('nav-group'))
  }, []);

  return null;
}