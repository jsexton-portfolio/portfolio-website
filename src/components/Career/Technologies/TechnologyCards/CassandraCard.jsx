import React from 'react'
import { technologies } from '../../../../util/technologies'
import { TechnologyCard } from './TechnologyCard'

export const CassandraCard = ({ ...other }) => {
  const { name, link } = technologies.CASSANDRA

  return (
    <TechnologyCard name={name} url={link} {...other}>
      <svg viewBox="0.963 0.963 64 64">
        <defs>
          <clipPath id="A">
            <path d="M0 792h612V0H0z" />
          </clipPath>
          <clipPath id="B">
            <path d="M0 792h612V0H0z" />
          </clipPath>
          <clipPath id="C">
            <path d="M96.008 715.93h88.3v-62.176h-88.3z" />
          </clipPath>
          <clipPath id="D">
            <path d="M0 792h612V0H0z" />
          </clipPath>
          <clipPath id="E">
            <path d="M0 792h612V0H0z" />
          </clipPath>
          <clipPath id="F">
            <path d="M0 792h612V0H0z" />
          </clipPath>
          <clipPath id="G">
            <path d="M0 792h612V0H0z" />
          </clipPath>
          <clipPath id="H">
            <path d="M121.202 708.378h45.9v-45.86h-45.9z" />
          </clipPath>
          <clipPath id="I">
            <path d="M0 792h612V0H0z" />
          </clipPath>
          <clipPath id="J">
            <path d="M40.403 726.188h212.402V664.37H40.403z" />
          </clipPath>
          <clipPath id="K">
            <path d="M0 792h612V0H0z" />
          </clipPath>
          <clipPath id="L">
            <path d="M39.52 688.644H238.9v-73.818H39.52z" />
          </clipPath>
        </defs>
        <g transform="matrix(.297194 0 0 -.297194 -11.087386 232.613935)">
          <g clipPath="url(#A)">
            <path
              d="M210.878 690.483c1.584-18.452-27.455-36.014-64.86-39.223s-69 9.15-70.592 27.602 27.455 36.016 64.86 39.225 69-9.15 70.592-27.604"
              fill="#bbe6fb"
            />
          </g>
          <g clipPath="url(#B)">
            <g clipPath="url(#C)" opacity=".35">
              <path
                d="M141.384 715.923c-14.268.232-30.964-5.433-43.387-10.738a35.89 35.89 0 0 1-1.989-11.797c0-21.888 19.764-39.634 44.145-39.634s44.145 17.746 44.145 39.634c0 6.927-1.984 13.435-5.463 19.1-9.94 1.545-23.6 3.2-37.45 3.434"
                fill="#fff"
              />
            </g>
          </g>
          <g clipPath="url(#D)">
            <path
              d="M140.153 715.928c-7.9.482-21.514-3.64-32.867-7.75a33.74 33.74 0 0 1-2.683-13.201c0-19.178 17.388-34.725 35.782-34.725 18.273 0 34.44 15.572 35.782 34.725.436 6.237-1.7 12.114-4.692 17.18-11.77 2.073-24.26 3.34-31.322 3.77"
              fill="#fff"
            />
          </g>
          <g clipPath="url(#E)" fill="#373535">
            <path d="M119.882 697.495c.97 2.146 2.437 3.197 3.86 4.996-.158.426-.504 1.82-.504 2.302a3.91 3.91 0 0 0 3.906 3.906 3.89 3.89 0 0 0 1.44-.278c6.465 4.927 14.976 7.075 23.53 5.163a30.5 30.5 0 0 0 2.3-.623c-8.453 1.172-17.98-1.822-24.462-7.053.198-.467.747-1.802.747-2.34 0-2.157-1.396-2.682-3.553-2.682a3.92 3.92 0 0 0-1.4.26c-1.464-1.966-3.258-5.7-4.136-8.052 3.584-3.206 6.822-4.368 11.042-5.945-.01.2.145.387.145.592 0 6.503 5.725 11.788 12.23 11.788 5.828 0 10.654-4.238 11.596-9.798 2.908 1.85 5.72 3.268 7.863 6-.5.6-1.04 2.337-1.04 3.187 0 1.957 1.588 3.544 3.545 3.544.277 0 .543-.04.802-.1 1.088 2.236 1.9 4.606 2.434 7.05-10.17 7.53-29.847 6.502-29.847 6.502s-15.658.817-26.258-4.35c.707-5.1 2.746-9.97 5.754-14.08m48.604 2.944a6.55 6.55 0 0 0 1.42-1.771c.95-1.7-.957-3.275-2.914-3.275a3.5 3.5 0 0 0-.582.059c-2.205-3.446-6.067-7.865-9.498-10.1 5.26-.862 10.222-2.97 14.17-6.225 2.875 5.15 5.08 12.6 5.08 18.907 0 4.8-2.123 8.334-5.328 10.92-.168-2.576-1.543-6.18-2.348-8.526m-42.696-32.614c1.753 4.84 6.065 8.592 10.144 11.892-.597.817-1.492 2.84-1.865 3.798-4.975 1.513-9.377 4.345-12.8 8.094l-.082-.324a25.87 25.87 0 0 1-.44-8.584 5.13 5.13 0 0 0 4.185-5.042c0-1.5-1.305-3.647-2.318-4.586 1.1-2.376 1.852-3.522 3.168-5.248m-.3-4.063c-2.1 2.08-3.537 6.226-4.894 8.83a5.13 5.13 0 0 0-.78-.066c-2.836 0-5.807 2.38-5.135 5.134.372 1.524 1.424 2.52 3.137 3.353-.4 3.157-.496 7.695.237 10.977.2.94.655 1.38.95 2.273-3.13 4.58-5.15 10.6-5.15 16.552 0 .218.01.433.016.65-5.288-2.652-9.253-6.83-9.253-13.407 0-14.548 8.38-28.82 20.846-34.413l.027.118m30.653 20.1c-1.6-4.582-5.967-7.873-11.1-7.873a11.72 11.72 0 0 0-7.267 2.52c-4.127-3.214-7.87-8.86-9.774-13.758.854-.92 1.45-1.675 2.407-2.5 2.887-.752 6.863 0 9.988 0 12.57 0 23.703 5.592 30.086 15.398-4.244 2.94-9.25 5.736-14.34 6.202" />
          </g>
          <g clipPath="url(#F)" fill="#1287b1">
            <path d="M119.56 695.794a28.45 28.45 0 0 0 3.605 5.931 3.91 3.91 0 0 0 3.656 5.273 3.89 3.89 0 0 0 1.44-.278c6.465 4.927 14.976 7.075 23.53 5.163a30.5 30.5 0 0 0 2.3-.623c-8.453 1.172-17.187-1.42-23.668-6.65.198-.466.306-.98.306-1.517a3.91 3.91 0 0 0-3.906-3.906 3.92 3.92 0 0 0-1.4.26c-1.464-1.966-2.66-4.138-3.54-6.48 3.078-3.317 6.856-5.94 11.075-7.517-.01.2-.03.4-.03.605 0 6.503 5.27 11.775 11.775 11.775 5.828 0 10.654-4.238 11.596-9.798 2.908 1.85 5.492 4.226 7.634 6.968a3.5 3.5 0 0 0-.81 2.229c0 1.957 1.588 3.544 3.545 3.544.277 0 .543-.04.802-.1 1.088 2.236 1.9 4.606 2.434 7.05-10.17 7.53-29.847 6.502-29.847 6.502s-15.658.817-26.258-4.35c.707-5.1 2.746-9.97 5.754-14.08m49.477 4.053c.72-.648 1.18-1.577 1.18-2.62 0-1.957-1.588-3.545-3.545-3.545a3.5 3.5 0 0 0-.582.059 28.69 28.69 0 0 0-8.559-8.608 28.66 28.66 0 0 0 13.793-6.201c2.875 5.15 4.518 11.084 4.518 17.402 0 4.8-2.123 8.334-5.328 10.92a28.51 28.51 0 0 0-1.477-7.406m-42.705-33.2c1.753 4.84 4.8 9.185 8.878 12.484a11.68 11.68 0 0 0-1.462 2.67 28.54 28.54 0 0 0-12.791 8.094l-.082-.324a25.82 25.82 0 0 1-.441-8.584c2.38-.444 4.185-2.53 4.185-5.042a5.11 5.11 0 0 0-1.652-3.767 30.93 30.93 0 0 1 3.365-5.53m-.863-2.843c-2.1 2.08-3.846 4.467-5.202 7.07a5.15 5.15 0 0 0-.78-.065c-2.836 0-5.135 2.3-5.135 5.134a5.13 5.13 0 0 0 2.897 4.616 28.47 28.47 0 0 0 .477 9.714c.2.938.466 1.854.76 2.75-3.13 4.578-4.962 10.113-4.962 16.076 0 .218.01.433.015.648-5.288-2.65-9.253-6.83-9.253-13.406 0-14.55 8.688-27.06 21.155-32.654l.027.118m30.35 18.352c-1.6-4.582-5.967-7.873-11.1-7.873a11.72 11.72 0 0 0-7.267 2.52c-4.127-3.214-7.242-7.595-9.144-12.494.853-.92 1.765-1.785 2.723-2.6 2.888-.752 5.917-1.155 9.042-1.155 12.57 0 23.62 6.5 30.004 16.295-4.244 2.94-9.168 4.84-14.258 5.305" />
          </g>
          <g clipPath="url(#G)">
            <g clipPath="url(#H)">
              <path
                d="M156.222 685.187l10.88 2.595-10.92.557 8.887 6.792-10.084-3.615 6.853 9.497-9.465-6.3 3.3 11.117-6.5-9.163-.148 11.58-4.277-10.314-3.566 10.437.193-12.295-6.163 11.02 3.335-11.702-9.997 7.27 7.83-9.84-12.4 4.564 9.795-7.247-12.56-.386 12.842-3.314-12.853-2.78 12.687-.92-10.7-6.85 11.017 3.994-7.644-9.68 9.66 7.8-3.478-13 7.457 10.572-1.045-12.486 4.233 11.32 3.603-11.897.876 11.933 5.348-10.18-3.16 11.645 9.793-7.586-6.322 9.672 10.744-4.186-8.215 8.073 11.016-.866z"
                fill="#fff"
              />
            </g>
          </g>
          <g clipPath="url(#I)">
            <g clipPath="url(#J)" opacity=".35">
              <path
                d="M40.403 664.37c33.74 33.74 60.687 44.155 85.143 48.9 3.236.63 3.848 7.7 3.848 7.7s.453-5.208 2.718-5.887 5.207 8.152 5.207 8.152-2.717-7.926 0-8.38 7.7 7.7 7.7 7.7-2.037-7.02-.678-7.472 8.15 10.2 8.15 10.2-4.076-7.02-.226-7.7 9.467 4.8 9.467 4.8-4.416-5.005-2.448-5.696c8.38-2.945 15.16 7.945 15.16 7.945s-1.57-4.775-5.647-9.983c8.83-2.264 15.4 11.04 15.4 11.04l-6.56-13.303c3.397-1.813 16.985 13.812 16.985 13.812s-7.02-12.228-11.096-14.718c2.264-1.812 10.416 5.434 10.416 5.434s-6.567-8.15-4.076-8.604c3.623-2.944 16.982 15.17 16.982 15.17s-5.207-10.642-12.906-19.02c6.435-3.22 22.418 17.436 22.418 17.436s-.453-6.567-12.002-16.983c8.605 1.132 19.7 17.436 19.7 17.436s-4.076-12.228-13.814-20.832c8.45.88 21.964 21.738 21.964 21.738s-5.207-14.492-15.85-22.87c11.775-2.604 28.758 14.945 28.758 14.945s-6.68-12.455-15.4-17.55c9.738-3.736 23.098 11.662 23.098 11.662s-13.36-20.607-34.645-19.7c-6.984.297-28.1 21.188-73.368 19.474C85.02 706.95 72.34 681.6 40.4 664.38"
                fill="#373535"
              />
            </g>
            <path
              d="M41.786 666.933c33.74 33.74 60.686 44.154 85.142 48.9 3.237.63 3.85 7.7 3.85 7.7s.452-5.2 2.718-5.887 5.207 8.15 5.207 8.15-2.717-7.926 0-8.378 7.7 7.7 7.7 7.7-2.037-7.02-.68-7.472 8.152 10.2 8.152 10.2-4.076-7.02-.226-7.7 9.467 4.8 9.467 4.8-4.416-5.005-2.448-5.696c8.38-2.944 15.157 7.945 15.157 7.945s-1.57-4.775-5.645-9.983c8.83-2.265 15.4 11.04 15.4 11.04L179 714.947c3.397-1.8 16.983 13.812 16.983 13.812s-7.018-12.226-11.094-14.717c2.264-1.812 10.416 5.434 10.416 5.434s-6.567-8.152-4.076-8.604c3.623-2.945 16.982 15.17 16.982 15.17s-5.2-10.643-12.906-19.02c6.435-3.22 22.418 17.436 22.418 17.436s-.453-6.568-12.002-16.984c8.605 1.133 19.7 17.437 19.7 17.437s-4.076-12.228-13.814-20.833c8.45.88 21.964 21.738 21.964 21.738s-5.207-14.492-15.85-22.87c11.775-2.604 28.758 14.944 28.758 14.944s-6.68-12.453-15.4-17.548c9.738-3.736 23.098 11.662 23.098 11.662s-13.36-20.607-34.647-19.7c-6.982.298-28.107 21.2-73.367 19.474-59.78-2.264-72.46-27.625-104.388-44.834"
              fill="#373535"
            />
          </g>
          <g clipPath="url(#K)">
            <g clipPath="url(#L)" opacity=".35">
              <path
                d="M39.52 660.68c17.832-8.945 34.137 1.358 54.686-4.433 15.623-4.404 34.645-9.833 60.458-6.096s47.893 14.944 58.424 34.985c3.283 8.943 16.642-2.04 16.642-2.04s-9.736 4.076-9.5 2.15 14.605-8.604 14.605-8.604-13.02 4.076-12.228 1.02 16.302-15.285 16.302-15.285-17.548 13.36-19.02 11.55 7.472-9.172 7.472-9.172-14.832 9.172-20.04 6.467c-3.746-1.943 15.4-14.506 15.4-14.506s-12.455 9.512-15.4 7.02 14.04-22.87 14.04-22.87S202.1 661.7 200.18 660.68s5.32-10.983 5.32-10.983-9.5 10.417-12.113 8.605 13.586-28.87 13.586-28.87-17.55 27.738-24.795 23.098c11.38-24.966 7.133-28.533 7.133-28.533s-1.452 25.47-15.625 24.796c-7.133-.34 3.396-19.02 3.396-19.02s-9.7 17.062-16.145 16.722c11.895-22.5 7.655-31.667 7.655-31.667s1.967 19.226-14.166 29.925c6.113-5.433-3.836-29.925-3.836-29.925s8.752 36.1-6.455 29.2c-2.403-1.085-.17-18.002-.17-18.002s-3.057 19.362-7.64 18.342c-2.673-.593-16.984-26.833-16.984-26.833s11.72 28.362 8.153 27.173c-2.598-.867-7.473-12.568-7.473-12.568s2.377 11.55 0 12.228-15.625-12.228-15.625-12.228 9.85 11.55 8.152 13.927c-2.574 3.603-5.6 3.772-9.17 2.377-5.2-2.03-12.227-11.548-12.227-11.548s6.996 9.637 5.773 13.247c-1.963 5.8-22.077-11.2-22.077-11.2s11.888 11.2 9.17 13.587-17.47 1.642-22.078 1.655c-13.586.042-18.294 3.23-22.418 6.496"
                fill="#373535"
              />
            </g>
            <path
              d="M38.84 662.718c17.832-8.945 34.136 1.358 54.685-4.434 15.623-4.402 34.646-9.832 60.46-6.095s47.9 14.945 58.422 34.984c3.283 8.944 16.642-2.037 16.642-2.037s-9.736 4.075-9.5 2.15 14.605-8.604 14.605-8.604-13.02 4.075-12.228 1.018 16.304-15.284 16.304-15.284-17.55 13.36-19.02 11.548 7.473-9.17 7.473-9.17-14.833 9.17-20.04 6.467c-3.747-1.944 15.398-14.506 15.398-14.506s-12.455 9.5-15.398 7.02 14.04-22.87 14.04-22.87-19.25 20.833-21.174 19.814 5.322-10.982 5.322-10.982-9.512 10.416-12.115 8.604 13.586-28.87 13.586-28.87-17.55 27.74-24.795 23.097c11.38-24.965 7.133-28.532 7.133-28.532s-1.452 25.47-15.625 24.795c-7.133-.34 3.396-19.02 3.396-19.02s-9.7 17.063-16.144 16.723c11.896-22.512 7.654-31.668 7.654-31.668s1.967 19.227-14.166 29.926c6.113-5.434-3.836-29.926-3.836-29.926s8.754 36.1-6.453 29.2c-2.403-1.086-.17-18.002-.17-18.002s-3.06 19.36-7.642 18.342c-2.674-.593-16.985-26.833-16.985-26.833s11.72 28.362 8.153 27.172c-2.598-.865-7.473-12.566-7.473-12.566s2.378 11.548 0 12.227-15.624-12.227-15.624-12.227 9.85 11.548 8.15 13.926c-2.574 3.603-5.6 3.77-9.17 2.376-5.2-2.03-12.228-11.547-12.228-11.547s6.996 9.638 5.774 13.247c-1.964 5.8-22.077-11.2-22.077-11.2s11.888 11.2 9.17 13.586-17.47 1.642-22.078 1.656c-13.586.043-18.293 3.23-22.417 6.496"
              fill="#373535"
            />
          </g>
        </g>
      </svg>
    </TechnologyCard>
  )
}